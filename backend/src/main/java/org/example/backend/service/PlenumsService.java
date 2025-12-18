package org.example.backend.service;

import org.example.backend.model.dto.PlenumsTerminDto;
import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.respository.PlenumsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlenumsService {

    private final PlenumsRepository plenumsRepo;
    private final IDService idService;


    public PlenumsService(PlenumsRepository plenumsRepo, IDService idService) {
        this.plenumsRepo = plenumsRepo;
        this.idService = idService;
    }

    public List<PlenumsTermin> getAll(){
        return plenumsRepo.findAll();
    }

    public PlenumsTermin createPlenumsTerminFromDTO(PlenumsTerminDto plenumsTerminDto) {
        return PlenumsTermin.builder()
                .id(idService.createId())
                .group(plenumsTerminDto.group())
                .tops(plenumsTerminDto.tops())
                .date(plenumsTerminDto.date())
                .build();

    }

    public PlenumsTermin addPlenumsTermin(PlenumsTerminDto plenumsTerminDto) {
        PlenumsTermin savePlenumstermin = createPlenumsTerminFromDTO(plenumsTerminDto);
        plenumsRepo.save(savePlenumstermin);
        return savePlenumstermin;
    }

    public PlenumsTermin deleteTerminById(String id){
        PlenumsTermin deletePlenumsTermin = plenumsRepo.findById(id).orElseThrow();
        plenumsRepo.deleteById(id);
        return deletePlenumsTermin;
    }

    public PlenumsTermin updatePlenumstermin(String id, PlenumsTerminDto updatePlenumsTerminDto) {
        PlenumsTermin oldPlenumsTermin = plenumsRepo.findById(id).orElse(null);
        if(oldPlenumsTermin!=null){
            plenumsRepo.save(oldPlenumsTermin
                .withDate(updatePlenumsTerminDto.date())
                .withGroup(updatePlenumsTerminDto.group())
                .withTops(updatePlenumsTerminDto.tops()));
        }
        return plenumsRepo.findById(id).orElse(null);
    }
}
