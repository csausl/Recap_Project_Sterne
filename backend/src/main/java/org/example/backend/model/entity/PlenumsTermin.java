package org.example.backend.model.entity;

import lombok.With;
import org.example.backend.utils.enums.Subgroup;

@With
public record PlenumsTermin(
        String id,
        String date,
        Subgroup group,
        String[] tops
) {
}
