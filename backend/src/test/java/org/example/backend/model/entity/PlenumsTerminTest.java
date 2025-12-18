package org.example.backend.model.entity;

import org.example.backend.utils.enums.Subgroup;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class PlenumsTerminTest {

    @Test
    void plenumsTermin_shouldReturnNewPlenumsTermin(){
        PlenumsTermin test=new PlenumsTermin("1","1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        assertEquals(new PlenumsTermin("1","1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"}),test);
    }

    @Test
    void testHashCode() {
        PlenumsTermin test=new PlenumsTermin("1","1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        int hash= test.hashCode();
        assertEquals(hash,test.hashCode());
    }

    @Test
    void testEquals() {
        PlenumsTermin test1=new PlenumsTermin("1","1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        PlenumsTermin test2=new PlenumsTermin("1","1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        boolean wellIsIt=test1.equals(test2);
        assertTrue(wellIsIt);
    }

    @Test
    void testToString() {
        PlenumsTermin test=new PlenumsTermin("1","1.1.1111", Subgroup.WERKSTATT, new String[]{"1","2","3"});
        String testString=test.toString();
        assertEquals(testString,test.toString());
    }
}