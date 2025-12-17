package org.example.backend.model.entity;

import lombok.Builder;
import lombok.With;
import org.example.backend.utils.enums.Subgroup;

import java.util.Arrays;
import java.util.Objects;

@Builder
@With
public record PlenumsTermin(
        String id,
        String date,
        Subgroup group,
        String[] tops
) {

    @Override
    public int hashCode() {
        return Objects.hash(id, date, group, Arrays.hashCode(tops));
    }
}
