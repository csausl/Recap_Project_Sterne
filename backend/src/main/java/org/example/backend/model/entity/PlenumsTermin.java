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

    @Override
    public boolean equals(Object o) {
        if (o == null || getClass() != o.getClass()) return false;
        PlenumsTermin termin = (PlenumsTermin) o;
        return Objects.equals(id, termin.id) && Objects.equals(date, termin.date) && Objects.equals(group, termin.group) && Arrays.equals(tops, termin.tops);
    }

    @Override
    public String toString() {
        return "Termin:"+
                "id:"+id+
                "date:"+date+
                "group:"+group+
                "tops:"+Arrays.toString(tops);
    }
}
