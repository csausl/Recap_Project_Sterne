
export type Subgroup ="ALLE" |"WERKSTATT" | "FEMINISTA" | "RSG" | "RSL" |  undefined

export type PlenumsTerminDto={
    date: string,
    group: Subgroup
    tops: string[]
}
export type PlenumsTermin={
    id: string,
    date: string,
    group: Subgroup
    tops: string[]
}
export const subgroups = [
    { label: 'Alle', value: 'ALLE' },
    { label: 'Feminista', value: 'FEMINISTA' },
    { label: 'RSL', value: 'RSL' },
    { label: 'RSG', value: 'RSG' },
    { label: 'Werkstatt', value: 'WERKSTATT' },
];