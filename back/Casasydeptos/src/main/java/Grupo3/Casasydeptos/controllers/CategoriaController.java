package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Categoria;
import Grupo3.Casasydeptos.services.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
public class CategoriaController {

    private final CategoriaService service;

    @Autowired
    public CategoriaController(CategoriaService service) {
        this.service = service;
    }

    @PostMapping(value = "/categorias/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Categoria> agregarCategoria(@RequestBody Categoria categoria) {
        categoria = service.save(categoria);
        URI uri = URI.create("/api/categorias/" + categoria.getIdCategoria());
        return ResponseEntity.created(uri).body(categoria);
    }

    @GetMapping("/categorias/{id}")
    public Categoria obtenerCategoriaById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/categorias/{id}")
    public Categoria actualizarCategoria(@PathVariable Long id, @RequestBody Categoria categoria) {
        if (!id.equals(categoria.getIdCategoria())) {
            throw new BadRequestException("Id de la categoría no coincide con el del path");
        }

        return service.save(categoria);
    }

    @GetMapping("/categorias/")
    public Iterable<Categoria> listarCategoria() {
        return service.findAll();
    }

    @DeleteMapping("/categorias/{id}")
    public Categoria borrarCategoria(@PathVariable Long id) {
        return service.delete(id);
    }

    @GetMapping("/categorias/cantidad/{id}")
    public Integer cantidadPorCategoria(@PathVariable Long id) {
        return service.cantidadPorCategoria(id);
    }
}
