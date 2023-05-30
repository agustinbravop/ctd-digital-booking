package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Categoria;
import Grupo3.Casasydeptos.models.Producto;
import Grupo3.Casasydeptos.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoriaService {

    private final CategoriaRepository repository;
    @Autowired
    ProductoService productoService;

    @Autowired
    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }

    public Categoria save(Categoria categoria) {
        if (categoria.getTitulo().isBlank()) {
            throw new BadRequestException("El titulo de una categoría no puede estar vacío");
        }

        categoria = repository.save(categoria);
        return categoria;
    }

    public Categoria findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra categoria con ese id")
        );
    }

    public Iterable<Categoria> findAll() {
        return repository.findAll();
    }

    public Categoria delete(Long id) {
        final Categoria oldCategoria = findById(id);
        repository.delete(oldCategoria);
        return oldCategoria;
    }

    public Integer cantidadPorCategoria(Long idCategoria) {
        List<Producto> listProd = new ArrayList<>();
        Iterable<Producto> iterableprod = productoService.findAllByCategoriaId(idCategoria);
        iterableprod.forEach(listProd::add);
        return listProd.size();
    }
}
