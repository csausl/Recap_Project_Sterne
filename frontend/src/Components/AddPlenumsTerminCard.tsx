import {type FormEvent, useEffect, useState} from "react";
import {type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddPlenumsTerminCard() {
    const [plenumsInfo, setplenumsInfo] = useState({
        firstName: "",
        orga: "",
        date: "",
        group: "",
    })
    const [topsForm, setTops] = useState([{
        topContent: "",
        topOrga: "",
        timestamp: new Date().getTime(),
    }])

    const handleInput = (event) => {
        const {name, value} = event.target;
        setplenumsInfo({
            ...plenumsInfo,
            [name]: value
        })
    }

    const handleTop = (event, index: number) => {
        const {name, value} = event.target;
        const newTops = [...topsForm];
        newTops[index][name] = value;
        setTops(newTops);
    }

    const handleRemoveTop = (i: number) => {
        const deleteTops=[...topsForm];
        deleteTops.splice(i,1);
        setTops(deleteTops);
    }

    const handleAddTop = () => {
        setTops([...topsForm, {
            topContent: "",
            topOrga:"",
            timestamp: new Date().getTime(),
        }])
    }

    const [plenumsTerminDto, setPlenumsTerminDto] = useState<PlenumsTerminDto>()
    const navigate = useNavigate();

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const topArray=topsForm.map(a => a.topContent);
        setPlenumsTerminDto({date: plenumsInfo.date, group: plenumsInfo.group as Subgroup, tops: topArray});
    }

    function resetForm() {
        setplenumsInfo({
            firstName: "",
            orga: "",
            date: "",
            group: "",
        })

        setTops([{
            topContent: "",
            topOrga: "",
            timestamp: new Date().getTime(),
        }])
    }

    function addNewPlenumstermin(){
           if(plenumsTerminDto) {
               axios.post("/api/plena",
                   plenumsTerminDto)
                   .then(response => {
                       console.log(response.data);
                   })
                   .finally(() => {navigate("/Plena")})
           }

    }

    function confirmUpdate(event:FormEvent<HTMLFormElement>){
        if(confirm("Termin anlegen?")){
            handleSubmit(event);
        }
        else event.preventDefault();
    }

    useEffect(() => {
        if(plenumsTerminDto){
            addNewPlenumstermin();
        }

    }, [plenumsTerminDto]);

    console.log(plenumsInfo);
    console.log(topsForm);



    return (
        <>
            <label className="text-4xl font-semibold mt-5 mb-5">Plenumstermin hinzufügen</label>
            <form className="formLayout" onSubmit={confirmUpdate}>
                <fieldset className="formFieldSet">
                    <legend className="formLegend">Termin Details</legend>
                    <label className="formLabel">Dein Name</label>
                    <input
                        className="formInput "
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        onChange={handleInput}
                    />
                    <label className="formLabel">Orga</label>
                    <input
                        className="formInput "
                        id="orga"
                        type="text"
                        name="orga"
                        placeholder="Wer macht die Orga?"
                        onChange={handleInput}
                    />
                    <label className="formLabel">Datum</label>
                    <input
                        className="formInput"
                        type="date"
                        name="date"
                        required={true}
                        onChange={handleInput}
                        min="2025-01-01"
                        max="2050-12-31"
                    />
                    <label className="formLabel">Gruppe</label>
                    <select
                        className="formInput "
                        id="group"
                        name="group"
                        required={true}
                        onChange={handleInput}>
                        {subgroups.map((category) => (
                            <option value={category.value} key={category.value}>{category.label}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className="formFieldSet">
                    <legend className="formLegend">Tagesordnungspunkte</legend>
                    {topsForm.map((top, index) => (
                        <div key={top.timestamp} className="flex flex-col">
                            <label className="formLabel">TOP {index+1}</label>
                            <input
                                className="formInput max-w-2/4 "
                                id="topOrga"
                                type="text"
                                name="topOrga"
                                placeholder="Von wem?"
                                onChange={event => handleTop(event, index)}
                            />
                            <div className="flex flex-row items-center">
                            <textarea className="formInput "
                                      id="topContent"
                                      name="topContent"
                                      rows={2}
                                      placeholder="Was ist zu besprechen?"
                                      onChange={event => handleTop(event, index)}/>
                                <button
                                    className="w-1/5 border border-gray-400 text-lg leading-tight"
                                    type={"button"}
                                    onClick={()=> handleRemoveTop(index)}
                                > - </button>
                            </div>
                        </div>
                    ))}
                    <div className="w-full flex justify-center">
                        <button
                            className="w-1/5 border border-gray-400 text-lg leading-tight"
                            type="button"
                            onClick={handleAddTop}
                        >
                            +
                        </button>
                    </div>


                </fieldset>
                <button type="submit">Submit</button>
                <button type="reset" onClick={resetForm}>Reset</button>
            </form>
        </>
    )
}
