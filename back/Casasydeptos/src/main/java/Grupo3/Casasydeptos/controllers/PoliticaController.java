package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Politica;
import Grupo3.Casasydeptos.services.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
public class PoliticaController {

    private final PoliticaService service;

    @Autowired
    public PoliticaController(PoliticaService service) {
        this.service = service;
    }

    @PostMapping(value = "/politicas/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Politica> agregarPolitica(@RequestBody Politica politica) {
        politica = service.save(politica);
        URI uri = URI.create("/api/politicas/" + politica.getIdPolitica());
        return ResponseEntity.created(uri).body(politica);
    }

    @GetMapping("/politicas/{id}")
    public Politica obtenerPolitica(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/politicas/{id}")
    public Politica actualizarPolitica(@PathVariable Long id, @RequestBody Politica politica) {
        if (!id.equals(politica.getIdPolitica())) {
            throw new BadRequestException("Id de la política no coincide con el del path");
        }
        return service.save(politica);
    }

    @GetMapping("/politicas/")
    public Iterable<Politica> listarPoliticas() {
        return service.findAll();
    }

    @DeleteMapping("/politicas/{id}")
    public Politica borrarPolitica(@PathVariable Long id) {
        return service.delete(id);
    }
}
