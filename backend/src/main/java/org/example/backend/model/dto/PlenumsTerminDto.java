package org.example.backend.model.dto;
import lombok.With;
import org.example.backend.utils.enums.Subgroup;

import java.util.Arrays;
import java.util.Objects;

@With
public record PlenumsTerminDto(
        String date,
        Subgroup group,
        String[] tops
) {
    @Override
    public int hashCode() {
        return Objects.hash(date, group, Arrays.hashCode(tops));
    }

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        PlenumsTerminDto termin = (PlenumsTerminDto) o;
        return Objects.equals(date, termin.date) && Objects.equals(group, termin.group) && Arrays.equals(tops, termin.tops);
    }

    @Override
    public String toString() {
        return "Termin: "+
                "date:"+date+
                "group:"+group+
                "tops:"+Arrays.toString(tops);
    }
}
