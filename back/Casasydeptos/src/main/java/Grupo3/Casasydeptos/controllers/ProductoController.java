package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Producto;
import Grupo3.Casasydeptos.services.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.Date;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.OPTIONS})
public class ProductoController {

    private final ProductoService service;

    @Autowired
    public ProductoController(ProductoService service) {
        this.service = service;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping(value = "/productos/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        producto = service.save(producto);
        URI uri = URI.create("/api/productos/" + producto.getIdProducto());
        return ResponseEntity.created(uri).body(producto);
    }

    @GetMapping("/productos/{id}")
    public Producto obtenerProducto(@PathVariable Long id) {
        return service.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/productos/{id}")
    public Producto actualizarProducto(@PathVariable Long id, @RequestBody Producto productos) {
        if (!id.equals(productos.getIdProducto())) {
            throw new BadRequestException("Id del producto no coincide con el del path");
        }

        return service.save(productos);
    }

    @GetMapping("/productos/")
    public Iterable<Producto> listarProductos(
            @RequestParam(value = "categoria", required = false) String categoria,
            @RequestParam(value = "ciudad", required = false) Long idCiudad,
            @RequestParam(value = "fecha_inicio", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fechaInicio,
            @RequestParam(value = "fecha_fin", required = false)
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date fechaFin) {

        return service.findAllByFilters(categoria, idCiudad, fechaInicio, fechaFin);
    }

    @GetMapping("/productos/porCategoria/{id}")
    public Iterable<Producto> listarProductosPorCategoriaId(@PathVariable Long id) {
        return service.findAllByCategoriaId(id);
    }

    @GetMapping("/productos/porCiudad/{id}")
    public Iterable<Producto> listarProductosPorCiudadId(@PathVariable Long id) {
        return service.findAllByCiudadId(id);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @DeleteMapping("/productos/{id}")
    public Producto borrarProducto(@PathVariable Long id) {
        return service.delete(id);
    }

    @GetMapping("/productos/paged")
    public ResponseEntity<?> listarProductos(Pageable pageable) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(service.findAll(pageable));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e);
        }
    }
}
