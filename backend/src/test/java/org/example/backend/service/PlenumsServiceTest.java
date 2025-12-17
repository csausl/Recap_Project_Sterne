package org.example.backend.service;

import org.example.backend.model.dto.PlenumsTerminDto;
import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.respository.PlenumsRepository;
import org.example.backend.utils.enums.Subgroup;
import org.junit.jupiter.api.Test;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PlenumsServiceTest {

    @Test
    void addPlenumsTermin_shouldReturnTerminWithID_WhenGivenDTO() {
        //GIVEN
        String mockID="asdghjkiud324";
        String[] mockTops={"1","2","3"};
        PlenumsTermin termin=new PlenumsTermin(mockID,"1.1.2021", Subgroup.WERKSTATT,mockTops);
        PlenumsTerminDto terminDto=new PlenumsTerminDto("1.1.2021", Subgroup.WERKSTATT,mockTops);
        PlenumsRepository mockPlenumsRepo=mock(PlenumsRepository.class);
        IDService mockIDService=mock(IDService.class);

        PlenumsService plenumsService=new PlenumsService(mockPlenumsRepo,mockIDService);
        //WHEN
        when(mockIDService.createId()).thenReturn(mockID);
        when(mockPlenumsRepo.save(termin)).thenReturn(termin);

        PlenumsTermin actualTermin=plenumsService.addPlenumsTermin(terminDto);
        //THEN
        assertEquals(termin,actualTermin);
    }

    @Test
    void createPlenumsTerminFromDTO_shouldReturnTermin_WhenGivenDTO() {
        //GIVEN
        String mockID="asdghjkiud324";
        String[] mockTops={"1","2","3"};
        PlenumsTermin termin=new PlenumsTermin(mockID,"1.1.2021", Subgroup.WERKSTATT,mockTops);
        PlenumsTerminDto terminDto=new PlenumsTerminDto("1.1.2021", Subgroup.WERKSTATT,mockTops);
        IDService mockIDService=mock(IDService.class);
        PlenumsRepository mockPlenumsRepo=mock(PlenumsRepository.class);

        PlenumsService plenumsService=new PlenumsService(mockPlenumsRepo,mockIDService);
        //WHEN
        when(mockIDService.createId()).thenReturn(mockID);

        PlenumsTermin actualTermin=plenumsService.createPlenumsTerminFromDTO(terminDto);
        //THEN
        assertEquals(termin,actualTermin);
    }

    @Test
    void getAll_shouldReturnAllEntries_whencalled() {
        //GIVEN
        String[] mockTops={"1","2","3"};
        List<PlenumsTermin> mockTermine=List.of(
                new PlenumsTermin("slkdhf8923lhjkf","1.1.2021", Subgroup.WERKSTATT,mockTops),
                new PlenumsTermin("ksjdf903sdf" ,"2.2.2022", Subgroup.FEMINISTA,mockTops)
        );
        IDService mockIDService=mock(IDService.class);
        PlenumsRepository mockPlenumsRepo=mock(PlenumsRepository.class);

        PlenumsService mockPlenumsService=new PlenumsService(mockPlenumsRepo,mockIDService);
        when(mockPlenumsService.getAll()).thenReturn(mockTermine);
        //WHEN
        List<PlenumsTermin> actualTermine=mockPlenumsService.getAll();

        //THEN
        assertEquals(mockTermine,actualTermine);
        verify(mockPlenumsRepo).findAll();
    }

    @Test
    void deleteTerminById_shouldReturnPlenumsTerminAndDelete_WhenGivenID() {
        //GIVEN
        String mockID="asdghjkiud324";
        String[] mockTops={"1","2","3"};
        PlenumsTermin mockTermin=new PlenumsTermin(mockID,"1.1.2021", Subgroup.WERKSTATT,mockTops);

        PlenumsRepository mockPlenumsRepo=mock(PlenumsRepository.class);
        IDService mockIDService=mock(IDService.class);

        PlenumsService mockPlenumsService=new PlenumsService(mockPlenumsRepo,mockIDService);

        when(mockPlenumsRepo.findById(mockID)).thenReturn(Optional.of(mockTermin));
        //when(mockPlenumsService.deleteTerminById(mockID)).thenReturn(mockTermin);
        //WHEN
        Optional<PlenumsTermin> actualTermin=Optional.of(mockPlenumsService.deleteTerminById(mockID));


        //THEN
        assertEquals(Optional.of(mockTermin),actualTermin);
        //verify(mockPlenumsRepo).findById(mockID);
        verify(mockPlenumsRepo).deleteById(mockID);
    }

    @Test
    void updatePlenumstermin_ShouldReturnPlenumsTermin_WhenCalledWithDtoAndId() {
        //GIVEN
        String mockID="asdghjkiud324";
        String[] mockTopsOld={"1","2","3"};
        String[] mockTopsNew={"A","B","C"};
        PlenumsTermin mockTerminOld=new PlenumsTermin(mockID,"1.1.2021", Subgroup.WERKSTATT,mockTopsOld);
        PlenumsTerminDto mockterminDto=new PlenumsTerminDto("1.1.2021", Subgroup.RSG,mockTopsNew);
        PlenumsTermin mockTerminNew=new PlenumsTermin(mockID,"1.1.2021", Subgroup.RSG,mockTopsNew);
        PlenumsRepository mockPlenumsRepo=mock(PlenumsRepository.class);
        IDService mockIDService=mock(IDService.class);

        PlenumsService mockPlenumsService=new PlenumsService(mockPlenumsRepo,mockIDService);

        when(mockPlenumsRepo.findById(mockID)).thenReturn(Optional.of(mockTerminOld)).thenReturn(Optional.of(mockTerminNew));
        when(mockPlenumsRepo.save(mockTerminOld
                .withGroup(mockTerminNew.group())
                .withTops(mockTerminNew.tops())
                .withDate(mockTerminNew.date()))).thenReturn(mockTerminNew);
        //WHEN
        PlenumsTermin actual=mockPlenumsService.updatePlenumstermin(mockID, mockterminDto);


        //THEN
        assertEquals(mockTerminNew,actual);
    }
}