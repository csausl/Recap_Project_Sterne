package org.example.backend.controller;

import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.respository.PlenumsRepository;
import org.example.backend.utils.enums.Subgroup;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;


@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class SterneControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private PlenumsRepository plenumsRepository;

    @Test
    @DirtiesContext
    void getAll_ShouldReturnListOfPlenumstermine_WhenCalled() throws Exception {
        //GIVEN
        String[] mockTops={"1","2","3"};
        PlenumsTermin mockTermin = new PlenumsTermin("askjdh123","1.1.2011", Subgroup.WERKSTATT,mockTops);
        plenumsRepository.save(mockTermin);
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.get("/api/plena"))
        //THEN
            .andExpect(MockMvcResultMatchers.status().isOk())
            .andExpect(MockMvcResultMatchers.content().json(
                    """
                      [
                      {
                      "id":"askjdh123",
                      "date":"1.1.2011",
                      "group":"WERKSTATT",
                      "tops": [
                      "1",
                      "2",
                      "3"
                      ]
                      }
                      ]
                      """
            ));
    }

    @Test
    void addPlenumsTermin_ShouldReturnPLenumsTermin_WhenCalledWithDto() throws Exception {
        //GIVEN
        String plenumsTerminDto="""
                      {
                              "date":"1.1.2011",
                              "group":"WERKSTATT",
                              "tops": [
                                  "1",
                                  "2",
                                  "3"
                              ]
                          }
                      """;

        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.post("/api/plena")
                .contentType(MediaType.APPLICATION_JSON)
                .content(plenumsTerminDto))
        //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(plenumsTerminDto))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").isNotEmpty());
    }

    @Test
    void deletePlenumsTermin() throws Exception {
        //GIVEN
        String id="askjdh123";
        String[] mockTops={"1","2","3"};
        String plenumsTermin="""
                      {
                              "id":"askjdh123",
                              "date":"1.1.2011",
                              "group":"WERKSTATT",
                              "tops": [
                                  "1",
                                  "2",
                                  "3"
                              ]
                          }
                      """;
        PlenumsTermin mockTermin = new PlenumsTermin("askjdh123","1.1.2011", Subgroup.WERKSTATT,mockTops);
        plenumsRepository.save(mockTermin);
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/plena/{id}",id))
        //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(plenumsTermin));
    }

    @Test
    void updatePlenumsTermin() throws Exception {
        //GIVEN
        String id="askjdh123";
        String[] mockTops={"1","2","3"};
        String plenumsTerminDto="""
                      {
                              "date":"1.1.2011",
                              "group":"WERKSTATT",
                              "tops": [
                                  "1",
                                  "2",
                                  "3"
                              ]
                          }
                      """;

        String plenumsTermin="""
                          {
                              "id":"askjdh123",
                              "date":"1.1.2011",
                              "group":"WERKSTATT",
                              "tops": [
                                  "1",
                                  "2",
                                  "3"
                              ]
                          }
                      """;
        PlenumsTermin mockTermin = new PlenumsTermin("askjdh123","1.1.2011", Subgroup.WERKSTATT,mockTops);
        plenumsRepository.save(mockTermin);
        //WHEN
        mockMvc.perform(MockMvcRequestBuilders.put("/api/plena/{id}",id)
                .contentType(MediaType.APPLICATION_JSON)
                .content(plenumsTerminDto))
        //THEN
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(plenumsTermin));
    }
}