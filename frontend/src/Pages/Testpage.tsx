import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import axios from "axios";
import {type PlenumsTermin, type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import PlenumsCard from "../Components/PlenumsCard.tsx";


export default function Testpage() {
    const [plenumsTerminDto, setPlenumsTerminDto] = useState<PlenumsTerminDto>()
    const [plenumDate, setPlenumDate] = useState<string>("");
    const [plenumGroup, setPlenumGroup] = useState<Subgroup>("ALLE");
    const [plenumFirstTop, setPlenumFirstTop] = useState<string>("");
    const [plenumSecondTop, setPlenumSecondTop] = useState<string>("");
    const [plenumThirdTop, setPlenumThirdTop] = useState<string>("");
    const [plena, setPlena] = useState<PlenumsTermin[]>([]);

    function getAllPlena(){
        axios.get("/api/plena").then((response) => {
            console.log(response.data);
            setPlena(response.data);
        })

    }
    function clear(){
        setPlena([])
    }

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(plenumsTerminDto, plenumDate, plenumGroup, plenumFirstTop, plenumSecondTop);
        setPlenumsTerminDto({date: plenumDate, group: plenumGroup, tops: [plenumFirstTop,plenumSecondTop,plenumThirdTop]});
        console.log(plenumsTerminDto);
        addNewPlenumstermin();
    }

    const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setPlenumGroup(event.target.value as Subgroup);
        console.log(plenumGroup);
    };

    function resetForm() {
        setPlenumDate("");
        setPlenumGroup("ALLE");
        setPlenumFirstTop("");
        setPlenumSecondTop("");
        setPlenumThirdTop("");
    }

    function addNewPlenumstermin(){
        if(plenumsTerminDto){
            axios.post("/api/plena",
                plenumsTerminDto)
                .then(response => {console.log(response.data);})
                .then(getAllPlena)
                .then(resetForm)
        }

    }

    useEffect(() => {
        getAllPlena();
        //console.log(plenumsTerminDto);
        //addNewPlenumstermin();
    },[])

    return (
        <>
        <div className={"topBar"}>
            <button className={"backbutton"}>back</button>
            <h1 className={"pageName"}>Seite</h1>
            <button className={"logoutButton"}>logout</button>
        </div>
        <div className={"mainContainer"}>
            <div className={"leftContainer"}>
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
                        onChange={handleChange}>
                        {subgroups.map((category) => (
                            <option value={category.value} key={category.value}>{category.label}</option>
                        ))}
                    </select>
                    </label>
                    <button type="submit">Submit</button>
                    <button type="reset" onClick={resetForm}>Reset</button>
                </form>

            </div>
            <div className={"rightContainer"}>
                <button onClick={getAllPlena}>Get All!</button>
                <button onClick={clear}>clear!</button>
                <div>
                    {plena.map((plenum) => (
                        <PlenumsCard plenum={plenum} onTerminChange={getAllPlena} key={plenum.id}/>
                        ))

                    }
                </div>
            </div>
        </div>
        </>
    )
}