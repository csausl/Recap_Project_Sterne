package org.example.backend.model.dto;
import lombok.With;
import org.example.backend.utils.enums.Subgroup;

@With
public record PlenumsTerminDto(
        String date,
        Subgroup group,
        String[] tops
) {
}
