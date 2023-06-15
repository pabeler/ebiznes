package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.EmailRequest;

@Controller
@RequestMapping("/api/v1/email")
public class EmailController {

    @Value("${mailgun.apiKey}")
    private String mailgunApiKey;

    @Value("${mailgun.domain}")
    private String mailgunDomain;

    @PostMapping("/send-email")
    @ResponseBody
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest emailRequest) {
        try {
            String url = String.format("https://api.mailgun.net/v3/%s/messages", mailgunDomain);

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            headers.setBasicAuth("api", mailgunApiKey);

            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("from", "Excited User <mailgun@YOUR_DOMAIN_NAME>");
            body.add("to", emailRequest.getEmail());
            body.add("subject", emailRequest.getName());
            body.add("text", emailRequest.getMessage() + "\n" + emailRequest.getPhone());

            HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(body, headers);

            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, requestEntity, String.class);

            return response;
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error occurred while sending email");
        }
    }
}
