package Grupo3.Casasydeptos.models;

import Grupo3.Casasydeptos.security.Entity.Usuario;

import javax.persistence.*;

@Entity
@Table(name = "puntuaciones")
public class Puntuacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_puntuacion", nullable = false)
    private Long idPuntuacion;
    private Integer puntuacion;

    @ManyToOne(optional = false)
    @JoinColumn(name = "usuario_id_usuario", nullable = false)
    private Usuario usuario;

    @ManyToOne(optional = false)
    @JoinColumn(name = "producto_id_producto", nullable = false)
    private Producto producto;

    public Puntuacion() {
    }

    public Long getIdPuntuacion() {
        return idPuntuacion;
    }

    public Integer getPuntuacion() {
        return puntuacion;
    }

    public void setPuntuacion(Integer puntuacion) {
        this.puntuacion = puntuacion;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }
}
