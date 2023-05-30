package Grupo3.Casasydeptos.security.Entity;

import Grupo3.Casasydeptos.models.Producto;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idUsuario;
    @Column(nullable = false)
    private String nombre;
    @Column(nullable = false)
    private String apellido;
    @Column(unique = true)
    private String email;
    @Column(nullable = false)
    @JsonIgnore
    private String contrasena;
    private String ciudad;
    private boolean isEnabled;


    @ManyToMany
    @JoinTable(name = "usuarios_roles",
            joinColumns = @JoinColumn(name = "usuario_id_usuario"),
            inverseJoinColumns = @JoinColumn(name = "rol_id_rol"))
    private Set<Rol> roles = new HashSet<>();

    @ManyToMany
    @JoinTable(name = "favoritos",
            joinColumns = @JoinColumn(name = "usuario_id_usuario"),
            inverseJoinColumns = @JoinColumn(name = "producto_id_producto"))
    private Set<Producto> favoritos;

    public Usuario() {
    }

    public Usuario(String nombre, String apellido, String email, String contrasena, String ciudad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.ciudad = ciudad;
    }

    public Long getIdUsuario() {
        return idUsuario;
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

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public Set<Rol> getRoles() {
        return roles;
    }

    public void setRoles(Set<Rol> roles) {
        this.roles = roles;
    }

    public Set<Producto> getFavoritos() {
        return favoritos;
    }

    public void setFavoritos(Set<Producto> favoritos) {
        this.favoritos = favoritos;
    }

    public boolean isEnabled() {
        return isEnabled;
    }

    public void setEnabled(boolean enabled) {
        isEnabled = enabled;
    }
}
