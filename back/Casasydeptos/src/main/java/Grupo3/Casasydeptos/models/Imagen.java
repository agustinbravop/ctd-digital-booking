package Grupo3.Casasydeptos.models;

import javax.persistence.*;

@Entity
@Table(name = "imagenes")
public class Imagen {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_imagen", nullable = false)
    private Long idImagen;
    private String titulo;
    private String urlImagen;

    public Imagen() {
    }

    public Imagen(String titulo, String urlImagenes) {
        this.titulo = titulo;
        this.urlImagen = urlImagenes;
    }

    public Long getIdImagen() {
        return idImagen;
    }

    public void setIdImagen(Long id_imagenes) {
        this.idImagen = id_imagenes;
    }

    public String getUrlImagen() {
        return urlImagen;
    }

    public void setUrlImagen(String urlImagen) {
        this.urlImagen = urlImagen;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
}
