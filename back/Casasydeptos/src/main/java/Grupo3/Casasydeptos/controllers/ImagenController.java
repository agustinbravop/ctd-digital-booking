package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Imagen;
import Grupo3.Casasydeptos.services.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
public class ImagenController {

    private final ImagenService service;

    @Autowired
    public ImagenController(ImagenService service) {
        this.service = service;
    }

    @PostMapping(value = "/imagenes/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Imagen> agregarImagen(@RequestBody Imagen imagen) {
        imagen = service.save(imagen);
        URI uri = URI.create("/api/imagenes/" + imagen.getIdImagen());
        return ResponseEntity.created(uri).body(imagen);
    }

    @GetMapping("/imagenes/{id}")
    public Imagen obtenerImagenById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/imagenes/{id}")
    public Imagen actualizarImagen(@PathVariable Long id, @RequestBody Imagen imagenes) {
        if (!id.equals(imagenes.getIdImagen())) {
            throw new BadRequestException("Id de la imagen no coincide con el del path");
        }
        return service.save(imagenes);
    }

    @GetMapping("/imagenes/")
    public Iterable<Imagen> listarImagenes() {
        return service.findAll();
    }

    @DeleteMapping("/imagenes/{id}")
    public Imagen borrarImagen(@PathVariable Long id) {
        return service.delete(id);
    }
}

