package Grupo3.Casasydeptos.security.Entity;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "confirmationtoken")
public class ConfirmationToken {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idtoken", nullable = false)
    private Long idtoken;

    @Column(name = "confirmation_token")
    private String confirmationToken;

    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @OneToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "usuario_id_usuario", nullable = false, unique = true)
    private Usuario usuario;

    public ConfirmationToken() {
    }

    public ConfirmationToken(Usuario usuario) {
        this.usuario = usuario;
        createdDate = new Date();
        confirmationToken = UUID.randomUUID().toString();
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Long getIdtoken() {
        return idtoken;
    }

    public void setIdtoken(Long idtoken) {
        this.idtoken = idtoken;
    }
}
