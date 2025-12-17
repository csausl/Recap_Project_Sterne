package org.example.backend.service;

import org.example.backend.model.dto.PlenumsTerminDto;
import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.respository.PlenumsRepository;
import org.example.backend.utils.enums.Subgroup;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlenumsService {

    private final PlenumsRepository plenumsRepo;
    private final IDService idService;


    public PlenumsService(PlenumsRepository plenumsRepo, IDService idService) {
        this.plenumsRepo = plenumsRepo;
        this.idService = idService;
        PlenumsTermin testPlenumstermin = new PlenumsTermin("1", "1.1.2026", Subgroup.WERKSTATT, new String[]{"erster TOP", "zweiter TOP", "dritter TOP"});
        PlenumsTermin testPlenumstermin2 = new PlenumsTermin("2", "2.2.2026", Subgroup.FEMINISTA, new String[]{"erster TOP", "zweiter TOP", "dritter TOP"});
        plenumsRepo.save(testPlenumstermin);
        plenumsRepo.save(testPlenumstermin2);
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
