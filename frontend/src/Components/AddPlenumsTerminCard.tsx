import {type FormEvent, useEffect, useState} from "react";
import {type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function AddPlenumsTerminCard() {
    const [plenumsInfos, setplenumsInfos] = useState({
        firstName: "",
        orga: "",
        date: "",
        group: "",
    })
    const [topForm, setTopForm] = useState([{
        topContent: "",
        topOrga: "",
        timestamp: new Date().getTime(),
    }])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setplenumsInfos({
            ...plenumsInfos,
            [name]: value
        })
    }

    const handleTop = (e, i: number) => {
        const {name, value} = e.target;
        const newTops = [...topForm];
        newTops[i][name] = value;
        setTopForm(newTops);
    }

    const handleRemoveTop = (i: number) => {
        const deleteTops=[...topForm];
        deleteTops.splice(i,1);
        setTopForm(deleteTops);
    }

    const handleAddTop = () => {
        setTopForm([...topForm, {
            topContent: "",
            topOrga:"",
            timestamp: new Date().getTime(),
        }])
    }

    const [plenumsTerminDto, setPlenumsTerminDto] = useState<PlenumsTerminDto>()
    const navigate = useNavigate();

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const topArray=topForm.map(a => a.topContent);
        setPlenumsTerminDto({date: plenumsInfos.date, group: plenumsInfos.group as Subgroup, tops: topArray});
    }

    function resetForm() {
        setplenumsInfos({
            firstName: "",
            orga: "",
            date: "",
            group: "",
        })

        setTopForm([{
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
                        onChange={handleChange}
                    />
                    <label className="formLabel">Orga</label>
                    <input
                        className="formInput "
                        id="orga"
                        type="text"
                        name="orga"
                        placeholder="Wer macht die Orga?"
                        onChange={handleChange}
                    />
                    <label className="formLabel">Datum</label>
                    <input
                        className="formInput"
                        type="date"
                        name="date"
                        required={true}
                        onChange={handleChange}
                        min="2025-01-01"
                        max="2050-12-31"
                    />
                    <label className="formLabel">Gruppe</label>
                    <select
                        className="formInput "
                        id="group"
                        name="group"
                        required={true}
                        onChange={handleChange}>
                        {subgroups.map((category) => (
                            <option value={category.value} key={category.value}>{category.label}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className="formFieldSet">
                    <legend className="formLegend">Tagesordnungspunkte</legend>
                    {topForm.map((top, index) => (
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
