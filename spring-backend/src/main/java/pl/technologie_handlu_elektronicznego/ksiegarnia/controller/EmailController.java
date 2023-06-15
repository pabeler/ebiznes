package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import com.sendgrid.Method;
import com.sendgrid.Request;
import com.sendgrid.SendGrid;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.Content;
import com.sendgrid.helpers.mail.objects.Email;
import com.sendgrid.helpers.mail.objects.Personalization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.EmailRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/email")
public class EmailController {
    private final SendGrid sendGrid;
    private final String senderEmail;

    @Autowired
    public EmailController(SendGrid sendGrid, @Value("${spring.mail.username}") String senderEmail) {
        this.sendGrid = sendGrid;
        this.senderEmail = senderEmail;
    }

    @PostMapping("/send-email")
    public ResponseEntity<Void> sendEmail(@RequestBody EmailRequest emailRequest) {
        try {
            Mail mail = new Mail();

            Email fromEmail = new Email(senderEmail);
            mail.setFrom(fromEmail);

            Email toEmail = new Email(emailRequest.getEmail());
            mail.setSubject("Email od: " + emailRequest.getName());
            mail.addContent(new Content("text/plain", emailRequest.getMessage()));

            Personalization personalization = new Personalization();
            personalization.addTo(toEmail);

            mail.addPersonalization(personalization);

            Request request = new Request();
            request.setMethod(Method.POST);
            request.setEndpoint("mail/send");
            request.setBody(mail.build());

            sendGrid.api(request);

            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}
