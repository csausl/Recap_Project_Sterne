package org.example.backend.service;

import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.respository.PlenumsRepository;
import org.example.backend.utils.enums.Subgroup;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlenumsService {

    private final PlenumsRepository plenumsRepo;

    public PlenumsService(PlenumsRepository plenumsRepo){
        this.plenumsRepo = plenumsRepo;
        PlenumsTermin testPlenumstermin = new PlenumsTermin("1", "1.1.2026", Subgroup.WERKSTATT, new String[]{"erster TOP", "zweiter TOP", "dritter TOP"});
        PlenumsTermin testPlenumstermin2 = new PlenumsTermin("2", "2.2.2026", Subgroup.FEMINISTA, new String[]{"erster TOP", "zweiter TOP", "dritter TOP"});
        plenumsRepo.save(testPlenumstermin);
        plenumsRepo.save(testPlenumstermin2);
    }

    public List<PlenumsTermin> getAll(){
        return plenumsRepo.findAll();
    }
}
