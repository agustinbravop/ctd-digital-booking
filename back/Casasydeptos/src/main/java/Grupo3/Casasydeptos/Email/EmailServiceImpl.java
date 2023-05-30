package Grupo3.Casasydeptos.Email;

import org.springframework.mail.MailSendException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {

    private static final String NOREPLY_ADDRESS = "noreply@grupo3-CTD.com";

    private final JavaMailSender javaMailSender;

    public EmailServiceImpl(JavaMailSender javaMailSender) {
        this.javaMailSender = javaMailSender;
    }

    @Override
    public void sendMail(Email email) {

        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(email.getDestinatario(), email.getDestinatario());
        msg.setSubject(email.getAsunto());
        msg.setText(email.getMensaje());

        javaMailSender.send(msg);
    }

    @Override
    public void sendMailTemplate(Email email) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true);
        message.setFrom(NOREPLY_ADDRESS);
        message.setTo(email.getDestinatario());
        message.setSubject(email.getAsunto());
        message.setText("<h1>" + email.getMensaje() + "</h1>", true);
        try {
            javaMailSender.send(mimeMessage);
        } catch (MailSendException e) {
            System.out.println("No se pudo enviar el mensaje");
        }
    }
}