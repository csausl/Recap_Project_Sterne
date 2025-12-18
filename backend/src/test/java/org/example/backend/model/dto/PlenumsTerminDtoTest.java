package org.example.backend.model.dto;

import org.example.backend.model.entity.PlenumsTermin;
import org.example.backend.utils.enums.Subgroup;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlenumsTerminDtoTest {

    @Test
    void plenumsTerminDto_shouldReturnNewPlenumsTerminDto(){
        PlenumsTerminDto test=new PlenumsTerminDto("1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        assertEquals(new PlenumsTerminDto("1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"}),test);
    }

    @Test
    void testHashCode() {
        PlenumsTerminDto test=new PlenumsTerminDto("1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});        int hash= test.hashCode();
        assertEquals(hash,test.hashCode());
    }

    @Test
    void testEquals() {
        PlenumsTerminDto test=new PlenumsTerminDto("1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        assertTrue(test.equals(new PlenumsTerminDto("1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"})));

    }

    @Test
    void testToString() {
        PlenumsTerminDto test=new PlenumsTerminDto("1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        String testString=test.toString();
        assertEquals(testString,test.toString());
    }
}