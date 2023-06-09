package pl.technologie_handlu_elektronicznego.ksiegarnia.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {
    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf()
                .disable()
                .authorizeHttpRequests()
                .requestMatchers("/api/v1/auth/**")
                .permitAll()
                .requestMatchers("/api/v1/authors/**")
                .permitAll()
                .requestMatchers("/api/v1/user/**")
                .permitAll()
                .requestMatchers("/api/v1/publishers/**")
                .permitAll()
                .requestMatchers("/api/v1/books/**")
                .permitAll()
                .requestMatchers("/api/v1/categories/**")
                .permitAll()
                .requestMatchers("/api/v1/reviews/**")
                .permitAll()
                .requestMatchers("/api/v1/checkout/**")
                .permitAll()
                .requestMatchers("/api/v1/order/**")
                .permitAll()
                .requestMatchers("/api/v1/orderDetail/**")
                .permitAll()
                .requestMatchers("/api/v1/email/**")
                .permitAll()
                .anyRequest()
                .authenticated()
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }
}
