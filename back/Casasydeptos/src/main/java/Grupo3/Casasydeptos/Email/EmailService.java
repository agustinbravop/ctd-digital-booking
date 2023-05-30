package Grupo3.Casasydeptos.Email;

import javax.mail.MessagingException;

public interface EmailService {
    void sendMail(Email email);

    void sendMailTemplate(Email email) throws MessagingException;
}
