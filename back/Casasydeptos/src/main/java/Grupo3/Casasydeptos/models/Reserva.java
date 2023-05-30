package Grupo3.Casasydeptos.models;

import Grupo3.Casasydeptos.security.Entity.Usuario;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Table(name = "reservas")
public class Reserva {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_reserva", nullable = false)
    private Long idReserva;
    private Time horaIngreso;
    private Date fechaInicio;
    private Date fechaFin;
    @Column(length = 2000)
    private String observaciones;
    private Boolean vacunadoCovid;

    @ManyToOne(cascade = CascadeType.MERGE, optional = false)
    @JoinColumn(name = "producto_id_producto", nullable = false)
    private Producto producto;

    @ManyToOne(optional = false)
    @JoinColumn(name = "usuario_id_usuario", nullable = false)
    private Usuario usuario;

    public Reserva() {
    }

    public Reserva(Time horaIngreso, Date fechaInicio, Date fechaFin, String observaciones, Boolean vacunadoCovid, Producto producto, Usuario usuario) {
        this.horaIngreso = horaIngreso;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.observaciones = observaciones;
        this.vacunadoCovid = vacunadoCovid;
        this.producto = producto;
        this.usuario = usuario;
    }

    public Long getIdReserva() {
        return idReserva;
    }

    public void setIdReserva(Long idReserva) {
        this.idReserva = idReserva;
    }

    public Time getHoraIngreso() {
        return horaIngreso;
    }

    public void setHoraIngreso(Time horaIngreso) {
        this.horaIngreso = horaIngreso;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(Date fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }

    public Boolean getVacunadoCovid() {
        return vacunadoCovid;
    }

    public void setVacunadoCovid(Boolean vacunadoCovid) {
        this.vacunadoCovid = vacunadoCovid;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }
}