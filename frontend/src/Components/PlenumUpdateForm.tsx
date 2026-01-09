import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {type PlenumsTermin, type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type UpdateProps={
    plenum: PlenumsTermin,
    onUpdate:() => void
}

export default function AddPlenumsTerminCard(props:Readonly<UpdateProps>) {
    const [plenumDateString, setPlenumDateString] = useState<string>(props.plenum.date);
    const [plenumGroup, setPlenumGroup] = useState<Subgroup>(props.plenum.group);
    const [plenumFirstTop, setPlenumFirstTop] = useState<string>(props.plenum.tops[0]);
    const [plenumSecondTop, setPlenumSecondTop] = useState<string>(props.plenum.tops[1]);
    const [plenumThirdTop, setPlenumThirdTop] = useState<string>(props.plenum.tops[2]);
    const [updatedPlenumsTerminDto, setUpdatedPlenumsTerminDto] = useState<PlenumsTerminDto>();

    const backToPlena = useNavigate();

    function updatePlenumsTermin(){
        axios.put('/api/plena/'+props.plenum.id, updatedPlenumsTerminDto)
            .then(response => {console.log(response.data)})
            .then(() => {backToPlena("/plena")})
    }

    function confirmUpdate(event:FormEvent<HTMLFormElement>){
        if(confirm("Are you sure you want to update?")){
            handleSubmit(event);
        }
    }

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setUpdatedPlenumsTerminDto({date: plenumDateString, group: plenumGroup, tops: [plenumFirstTop,plenumSecondTop,plenumThirdTop]});
        //resetForm();
    }

    const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setPlenumGroup(event.target.value as Subgroup);
    };

    function resetForm() {
        setPlenumDateString(props.plenum.date)
        setPlenumGroup(props.plenum.group);
        setPlenumFirstTop(props.plenum.tops[0]);
        setPlenumSecondTop(props.plenum.tops[1]);
        setPlenumThirdTop(props.plenum.tops[2]);
    }

    useEffect(() => {
        if(updatedPlenumsTerminDto){
            updatePlenumsTermin();
            props.onUpdate();
        }
    }, [updatedPlenumsTerminDto]);

    return (
        <form className={"plenumsForm"} onSubmit={confirmUpdate}>
            <label>Date:<input
                //value={plenumDate}
                //value={""}
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
                placeholder={props.plenum.tops[0]}
            />
            </label>
            <label>Top 2: <input
                value={plenumSecondTop}
                name={"Top 2"}
                onChange={(e) => setPlenumSecondTop(e.target.value)}
                placeholder={props.plenum.tops[1]}
            />
            </label>
            <label>Top 3: <input
                value={plenumThirdTop}
                name={"Top 3"}
                onChange={(e) => setPlenumThirdTop(e.target.value)}
                placeholder={props.plenum.tops[2]}
            />
            </label>
            <label>Gruppe:<select
                value={plenumGroup}
                required={true}
                onChange={handleChange}>
                <option value="">bitte auswählen</option>
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
