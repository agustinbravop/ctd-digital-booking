package Grupo3.Casasydeptos.security.dto;

import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

public class JwtDto {

    private final Long idUsuario;
    private String nombre;
    private String apellido;
    private String jwt;
    private String email;
    private Collection<? extends GrantedAuthority> authorities;

    public JwtDto(String jwt, Long idUsuario, String email, String nombre, String apellido, Collection<? extends GrantedAuthority> authorities) {
        this.jwt = jwt;
        this.idUsuario = idUsuario;
        this.email = email;
        this.nombre = nombre;
        this.apellido = apellido;
        this.authorities = authorities;
    }

    public String getJwt() {
        return jwt;
    }

    public void setJwt(String jwt) {
        this.jwt = jwt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }
}
