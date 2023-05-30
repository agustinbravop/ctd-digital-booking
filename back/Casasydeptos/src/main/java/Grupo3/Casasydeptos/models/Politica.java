package Grupo3.Casasydeptos.models;

import javax.persistence.*;

@Entity
@Table(name = "politicas")
public class Politica {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_politica", nullable = false)
    private Long idPolitica;
    private String titulo;
    private String descripcion;

    public Politica() {
    }

    public Politica(String titulo, String descripcion) {
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    public Long getIdPolitica() {
        return idPolitica;
    }

    public void setIdPolitica(Long idPolitica) {
        this.idPolitica = idPolitica;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
