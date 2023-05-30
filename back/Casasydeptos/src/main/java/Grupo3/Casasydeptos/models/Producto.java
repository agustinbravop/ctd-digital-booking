package Grupo3.Casasydeptos.models;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "productos")
public class Producto implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id_producto", nullable = false)
    private Long idProducto;
    private String nombre;
    private String latitud;
    private String longitud;
    private String direccion;
    private Double promedio;

    @Column(length = 2000)
    private String descripcion;

    @ManyToOne(optional = false)
    @JoinColumn(name = "categoria_id_categoria")
    private Categoria categoria;

    @ManyToOne(optional = false)
    @JoinColumn(name = "ciudad_id_ciudad", nullable = false)
    private Ciudad ciudad;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "productos_caracteristicas",
            joinColumns = @JoinColumn(
                    name = "producto_id_producto",
                    referencedColumnName = "id_producto"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "caracteristica_id_caracteristica",
                    referencedColumnName = "id_caracteristica"
            )
    )
    private List<Caracteristica> caracteristicas;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "producto_id_producto")
    private List<Imagen> imagenes;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "producto_id_producto")
    private List<Politica> politicas;

    public Producto() {
    }

    public List<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(List<Imagen> imagenes) {
        this.imagenes = imagenes;
    }

    public List<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(List<Politica> politicas) {
        this.politicas = politicas;
    }

    public Long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getLatitud() {
        return latitud;
    }

    public void setLatitud(String latitud) {
        this.latitud = latitud;
    }

    public String getLongitud() {
        return longitud;
    }

    public void setLongitud(String longitud) {
        this.longitud = longitud;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public List<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(List<Caracteristica> caracteristicases) {
        this.caracteristicas = caracteristicases;
    }

    public Double getPromedio() {
        return promedio;
    }

    public void setPromedio(Double puntuacionPromedio) {
        this.promedio = puntuacionPromedio;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "idProducto=" + idProducto +
                ", nombre='" + nombre + '\'' +
                ", descripcion='" + descripcion + '\'' +
                ", latitud='" + latitud + '\'' +
                ", longitud='" + longitud + '\'' +
                ", direccion='" + direccion + '\'' +
                ", categoria=" + categoria +
                ", ciudades=" + ciudad +
                ", caracteristicas=" + caracteristicas +
                '}';
    }
}
