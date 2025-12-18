import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import axios from "axios";

export default function AddPlenumsTerminCard() {
    const [plenumDate, setPlenumDate] = useState<string>("");
    const [plenumGroup, setPlenumGroup] = useState<Subgroup>("ALLE");
    const [plenumFirstTop, setPlenumFirstTop] = useState<string>("");
    const [plenumSecondTop, setPlenumSecondTop] = useState<string>("");
    const [plenumThirdTop, setPlenumThirdTop] = useState<string>("");
    const [plenumsTerminDto, setPlenumsTerminDto] = useState<PlenumsTerminDto>()

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPlenumsTerminDto({date: plenumDate, group: plenumGroup, tops: [plenumFirstTop,plenumSecondTop,plenumThirdTop]});
    }

    const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setPlenumGroup(event.target.value as Subgroup);
    };

    function resetForm() {
        setPlenumDate("");
        setPlenumGroup("ALLE");
        setPlenumFirstTop("");
        setPlenumSecondTop("");
        setPlenumThirdTop("");
    }

    function addNewPlenumstermin(){
        axios.post("/api/plena",
            plenumsTerminDto)
            .then(response => {console.log(response.data);})
            .then(resetForm)
    }

    useEffect(() => {
        addNewPlenumstermin();
        console.log("raw: " ,plenumDate, plenumGroup, plenumFirstTop, plenumSecondTop);
        console.log(plenumsTerminDto);
    }, [plenumsTerminDto]);
    return (
            <form className={"plenumsForm"} onSubmit={handleSubmit}>
                <label>Date:<input
                    name={"Date"}
                    onChange={(e) => setPlenumDate(e.target.value)}
                    placeholder={"Enter Date"}
                    value={plenumDate}/>
                </label>
                <label>Top 1: <input
                    name={"Top 1"}
                    onChange={(e) => setPlenumFirstTop(e.target.value)}
                    placeholder={"Enter Top 1"}
                    value={plenumFirstTop}/>
                </label>
                <label>Top 2: <input
                    name={"Top 2"}
                    onChange={(e) => setPlenumSecondTop(e.target.value)}
                    placeholder={"Enter Top 2"}
                    value={plenumSecondTop}/>
                </label>
                <label>Top 3: <input
                    name={"Top 3"}
                    onChange={(e) => setPlenumThirdTop(e.target.value)}
                    placeholder={"Enter Top 3"}
                    value={plenumThirdTop}/>
                </label>
                <label>Gruppe:<select
                    value={plenumGroup}
                    //onChange={handleChange}>
                    onChange={handleChange}>
                    {subgroups.map((category) => (
                        <option value={category.value} key={category.value}>{category.label}</option>
                    ))}
                </select>
                </label>
                <button type="submit">Submit</button>
                <button type="reset" onClick={resetForm}>Reset</button>
            </form>
    )
}
