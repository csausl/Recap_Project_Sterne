package org.example.backend.utils.enums;

public enum Subgroup {
    WERKSTATT ("Werkstatt"),
    FEMINISTA ("Feminista"),
    RSG ("RSG"),
    RSL ("RSL"),
    ALLE ("ALLE");

    private final String subgroup;

    Subgroup(String subgroup) {
        this.subgroup = subgroup;
    }

    public String getSubgroup() {
        return subgroup;
    }
}