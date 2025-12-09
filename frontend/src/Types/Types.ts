
export type Subgroup ="WERKSTATT" | "FEMINISTA" | "RSG"|"RSL"|undefined

export type PlenumsterminDto={
    date: string,
    group: Subgroup
    tops: string[]
}
export type Plenumstermin={
    id: string,
    date: string,
    group: Subgroup
    tops: string[]
}
export const subgroups = [
    { label: 'WERKSTATT', value: 'WERKSTATT' },
    { label: 'FEMINISTA', value: 'FEMINISTA' },
    { label: 'RSL', value: 'RSL' },
    { label: 'RSG', value: 'RSG' },
];