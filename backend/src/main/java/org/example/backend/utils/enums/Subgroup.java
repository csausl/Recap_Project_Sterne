package org.example.backend.utils.enums;

public enum Subgroup {
    WERKSTATT ("Werkstatt"),
    FEMINISTA ("Feminista"),
    RSG ("RSG"),
    RSL ("RSL"),
    ALLE ("ALLE");

    private final String group;

    Subgroup(String group) {
        this.group = group;
    }

    public String getSubgroup() {
        return group;
    }
}