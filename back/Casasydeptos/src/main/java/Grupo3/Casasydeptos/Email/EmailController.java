package Grupo3.Casasydeptos.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.mail.MessagingException;

@RestController
@RequestMapping("/api/mail/")
public class EmailController {
    private final EmailService service;

    @Autowired
    public EmailController(EmailService service) {
        this.service = service;
    }

    @PostMapping("/send")
    public ResponseEntity<String> sendMail(@RequestBody Email email) {
        service.sendMail(email);
        return new ResponseEntity<>("Email enviado", HttpStatus.OK);
    }

    @PostMapping("/template")
    public ResponseEntity<String> sendMailTemplate(@RequestBody Email email) throws MessagingException {
        service.sendMailTemplate(email);
        return new ResponseEntity<>("Email enviado", HttpStatus.OK);
    }
}
