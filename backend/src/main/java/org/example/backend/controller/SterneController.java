package org.example.backend.controller;

import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.service.PlenumsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
