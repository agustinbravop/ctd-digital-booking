package Grupo3.Casasydeptos.security.dto;

import javax.validation.constraints.NotBlank;

public class LoginUsuario {

    @NotBlank
    private String email;
    @NotBlank
    private String contrasena;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    @Override
    public String toString() {
        return "LoginUsuario{" +
                "email='" + email + '\'' +
                ", contrasena='" + contrasena + '\'' +
                '}';
    }
}
