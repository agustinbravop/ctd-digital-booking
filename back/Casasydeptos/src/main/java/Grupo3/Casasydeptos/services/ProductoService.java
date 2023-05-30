package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Producto;
import Grupo3.Casasydeptos.repository.ProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ProductoService {

    private final ProductoRepository repository;

    @Autowired
    public ProductoService(ProductoRepository repository) {
        this.repository = repository;
    }

    public Producto save(Producto producto) {
        if (producto.getNombre().isBlank()) {
            throw new BadRequestException("El nombre del producto no puede estar vacío");
        }

        producto = repository.save(producto);
        return producto;
    }

    public Producto findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra producto con ese id")
        );
    }

    public Iterable<Producto> findAll() {
        return repository.findAll();
    }

    public Iterable<Producto> findAllByCategoriaId(Long id) {
        return repository.findAllByCategoriaId(id);
    }

    public Iterable<Producto> findAllByCiudadId(Long id) {
        return repository.findAllByCiudadId(id);
    }

    public Producto delete(Long id) {
        final Producto oldProducto = findById(id);
        repository.delete(oldProducto);
        return oldProducto;
    }

    public Page<Producto> findAll(Pageable pageable) {
        return repository.findAll(pageable);
    }

    public Iterable<Producto> findAllByFilters(String categoria, Long idCiudad, Date fechaInicio, Date fechaFin) {
        return repository.findAllByFilters(categoria, idCiudad, fechaInicio, fechaFin);
    }
}
