package Grupo3.Casasydeptos.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "caracteristicas")
public class Caracteristica implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_caracteristica", nullable = false)
    private Long idCaracteristica;
    private String nombre;
    private String urlIcono;

    public Caracteristica() {
    }

    public Caracteristica(String nombre) {
        this.nombre = nombre;
    }

    public Long getIdCaracteristica() {
        return idCaracteristica;
    }

    public void setIdCaracteristica(Long id) {
        this.idCaracteristica = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getUrlIcono() {
        return urlIcono;
    }

    public void setUrlIcono(String urlIcono) {
        this.urlIcono = urlIcono;
    }

    @Override
    public String toString() {
        return "Caracteristica{" +
                "idCaracteristica=" + idCaracteristica +
                ", nombre='" + nombre + '\'' +
                '}';
    }
}
