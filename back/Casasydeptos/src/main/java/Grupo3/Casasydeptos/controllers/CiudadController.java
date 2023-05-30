package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Ciudad;
import Grupo3.Casasydeptos.services.CiudadService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
public class CiudadController {

    private final CiudadService service;

    @Autowired
    public CiudadController(CiudadService service) {
        this.service = service;
    }

    @PostMapping(value = "/ciudades/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Ciudad> crearCiudad(@RequestBody Ciudad ciudad) {
        ciudad = service.save(ciudad);
        URI uri = URI.create("/api/ciudades/" + ciudad.getIdCiudad());
        return ResponseEntity.created(uri).body(ciudad);
    }


    @PutMapping("/ciudades/{id}")
    public Ciudad actualizarCiudad(@PathVariable Long id, @RequestBody Ciudad ciudad) {
        if (!id.equals(ciudad.getIdCiudad())) {
            throw new BadRequestException("Id de la ciudad no coincide con el del path");
        }
        return service.save(ciudad);
    }

    @GetMapping("/ciudades/")
    public Iterable<Ciudad> listarCiudades() {
        return service.findAll();
    }

    @GetMapping("/ciudades/{id}")
    public Ciudad buscarCiudadPorId(@PathVariable Long id) {
        return service.findById(id);
    }

    @DeleteMapping("/ciudades/{id}")
    public Ciudad borrarCiudad(@PathVariable Long id) {
        return service.delete(id);
    }
}
