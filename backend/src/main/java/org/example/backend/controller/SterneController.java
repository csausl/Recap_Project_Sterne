package org.example.backend.controller;

import org.example.backend.model.dto.PlenumsTerminDto;
import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.service.PlenumsService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/plena")
public class SterneController {
    private final PlenumsService plenumsService;

    public SterneController(PlenumsService plenumsService){
        this.plenumsService = plenumsService;
    }

    @GetMapping
    public List<PlenumsTermin> getAll(){
        return plenumsService.getAll();
    }

    @PostMapping()
    public PlenumsTermin addProduct(@RequestBody PlenumsTerminDto plenumsTerminDto) {
        return plenumsService.addPlenumsTermin(plenumsTerminDto);
    }

    @DeleteMapping("/{id}")
    public PlenumsTermin deletePlenumsTermin(@PathVariable String id){
        return plenumsService.deleteTerminById(id);
    }

    @PutMapping("/{id}")
    public PlenumsTermin updatePlenumsTermin(@PathVariable String id,
                                             @RequestBody PlenumsTerminDto plenumsTerminDto){
        return plenumsService.updatePlenumstermin(id, plenumsTerminDto);
    }

}
