import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import axios from "axios";

export default function AddPlenumsTerminCard() {
    const [plenumDateString, setPlenumDateString] = useState<string>("");
    const [plenumGroup, setPlenumGroup] = useState<Subgroup>(undefined);
    const [plenumFirstTop, setPlenumFirstTop] = useState<string>("");
    const [plenumSecondTop, setPlenumSecondTop] = useState<string>("");
    const [plenumThirdTop, setPlenumThirdTop] = useState<string>("");
    const [plenumsTerminDto, setPlenumsTerminDto] = useState<PlenumsTerminDto>()

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        console.log("submit runs");
        event.preventDefault();
        setPlenumsTerminDto({date: plenumDateString, group: plenumGroup, tops: [plenumFirstTop,plenumSecondTop,plenumThirdTop]});
        resetForm();
    }


    const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setPlenumGroup(event.target.value as Subgroup);
    };

    function resetForm() {
        console.log("reset form");
        setPlenumDateString("")
        setPlenumGroup("");
        setPlenumFirstTop("");
        setPlenumSecondTop("");
        setPlenumThirdTop("");
    }

    function addNewPlenumstermin(){
        console.log("posting addNewPlenumstermin");
           if(plenumsTerminDto) {
               axios.post("/api/plena",
                   plenumsTerminDto)
                   .then(response => {
                       console.log(response.data);
                   })
           }

    }

    useEffect(() => {
        addNewPlenumstermin();
    }, [plenumsTerminDto]);
    return (
            <form className={"plenumsForm"} onSubmit={handleSubmit}>
                <label>Date:<input
                    //value={plenumDate}
                    type="date"
                    onChange={(e) =>{
                        const dateString = (new Date(e.target.value)).toLocaleDateString("de-EU");
                        setPlenumDateString(dateString);}
                    }
                    min="2025-01-01"
                    max="2050-12-31"
                    required={true}/>
                </label>
                <label>Top 1: <input
                    value={plenumFirstTop}
                    name={"Top 1"}
                    onChange={(e) => setPlenumFirstTop(e.target.value)}
                    placeholder={"Enter Top 1"}
                    />
                </label>
                <label>Top 2: <input
                    value={plenumSecondTop}
                    name={"Top 2"}
                    onChange={(e) => setPlenumSecondTop(e.target.value)}
                    placeholder={"Enter Top 2"}
                    />
                </label>
                <label>Top 3: <input
                    value={plenumThirdTop}
                    name={"Top 3"}
                    onChange={(e) => setPlenumThirdTop(e.target.value)}
                    placeholder={"Enter Top 3"}
                    />
                </label>
                <label>Gruppe:<select
                    value={plenumGroup}
                    required={true}
                    onChange={handleChange}>
                    <option value="">please choose</option>
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
