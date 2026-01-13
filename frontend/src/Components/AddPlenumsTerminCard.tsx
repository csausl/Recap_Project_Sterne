import {type ChangeEvent, type FormEvent, useEffect, useState} from "react";
import {type PlenumsTerminDto, type Subgroup, subgroups} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export type TerminData={
    date: Date,
    group: Subgroup
    top: string
}

export default function AddPlenumsTerminCard() {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        orga: "",
        date: "",
        group: "",
    })
    const [tops, setTops] = useState([{
        top: "",
        timestamp: new Date().getTime(),
    }])

    console.log(userInfo);
    console.log(tops);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleTop = (e, i: number) => {
        console.log(i);
        const {name, value} = e.target;
        const newTops = [...tops];
        newTops[i][name] = value;
        setTops(newTops);
    }

    const handleRemoveTop = (i: number) => {
        const deleteTops=[...tops];
        deleteTops.splice(i,1);
        setTops(deleteTops);
    }

    const handleAddTop = () => {
        setTops([...tops, {
            top: "",
            timestamp: new Date().getTime(),
        }])
    }

    const [plenumDateString, setPlenumDateString] = useState<string>("");
    const [plenumGroup, setPlenumGroup] = useState<Subgroup>(undefined);
    const [plenumFirstTop, setPlenumFirstTop] = useState<string>("");
    const [plenumSecondTop, setPlenumSecondTop] = useState<string>("");
    const [plenumThirdTop, setPlenumThirdTop] = useState<string>("");
    const [plenumsTerminDto, setPlenumsTerminDto] = useState<PlenumsTerminDto>()
    const navigate = useNavigate();

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setPlenumsTerminDto({date: plenumDateString, group: plenumGroup, tops: [plenumFirstTop,plenumSecondTop,plenumThirdTop]});
    }

    const handleChange = (event:ChangeEvent<HTMLSelectElement>) => {
        setPlenumGroup(event.target.value as Subgroup);
    };

    function resetForm() {
        setPlenumDateString("")
        setPlenumGroup("");
        setPlenumFirstTop("");
        setPlenumSecondTop("");
        setPlenumThirdTop("");
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

    useEffect(() => {
        if(plenumsTerminDto){
            addNewPlenumstermin();
        }

    }, [plenumsTerminDto]);

    return (
        <>
            <form className={"plenumsForm"} onSubmit={handleSubmit}>
                <label>Date:<input
                    //value={plenumDate}
                    type="date"
                    name="plenumDate"
                    onChange={(e) =>{
                        const dateString = (new Date(e.target.value)).toISOString();
                        setPlenumDateString(dateString);}
                    }
                    min="2025-01-01"
                    max="2050-12-31"
                    required={true}/>
                </label>
                <label>Top 1: <input
                    value={plenumFirstTop}
                    name={"plenumFirstTop"}
                    onChange={(e) => setPlenumFirstTop(e.target.value)}
                    placeholder={"Enter Top 1"}
                    />
                </label>
                <label>Top 2: <input
                    value={plenumSecondTop}
                    name={"plenumSecondTop"}
                    onChange={(e) => setPlenumSecondTop(e.target.value)}
                    placeholder={"Enter Top 2"}
                    />
                </label>
                <label>Top 3: <input
                    value={plenumThirdTop}
                    name={"plenumThirdTop"}
                    onChange={(e) => setPlenumThirdTop(e.target.value)}
                    placeholder={"Enter Top 3"}
                    />
                </label>
                <label>Gruppe:<select
                    value={plenumGroup}
                    required={true}
                    onChange={handleChange}
                    name="plenumGroup">
                    <option value="">please choose</option>
                    {subgroups.map((category) => (
                        <option value={category.value} key={category.value}>{category.label}</option>
                    ))}

                </select>
                </label>
                <button type="submit">Submit</button>
                <button type="reset" onClick={resetForm}>Reset</button>
            </form>

            <form className="formLayout">
                <fieldset className="formFieldSet">
                    <legend className="formLegend">Information Hinzufügen</legend>
                    <label className="formLabel">Dein Name</label>
                    <input
                        className="formInput focus:outline-2 focus:outline-red-300"
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        onChange={handleInput}
                    />
                    <label className="formLabel">Orga</label>
                    <input
                        className="formInput focus:outline-2 focus:outline-red-300"
                        id="orga"
                        type="text"
                        name="orga"
                        placeholder="Wer macht die Orga?"
                        onChange={handleInput}
                    />
                    <label className="formLabel">Datum</label>
                    <input
                        className="formInput focus:outline-2 focus:outline-red-300"
                        id="date"
                        type="date"
                        name="date"
                        onChange={handleInput}
                        min="2025-01-01"
                        max="2050-12-31"
                    />
                    <label className="formLabel">Gruppe</label>
                    <select
                        className="formInput focus:outline-2 focus:outline-red-300"
                        id="group"
                        name="group"
                        onChange={handleInput}>
                        {subgroups.map((category) => (
                            <option value={category.value} key={category.value}>{category.label}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className="formFieldSet">
                    <legend className="formLegend">Tagesordnungpunkte</legend>
                    {tops.map((top, i) => (
                        <div key={top.timestamp} className="flex flex-col">
                            <label className="formLabel">TOP {i+1}</label>
                            <div className="flex flex-row items-center">
                            <textarea className="formInput focus:outline-2 focus:outline-red-300"
                                      id="top"
                                      name="top"
                                      rows={2}
                                      placeholder="Was ist zu tun?"
                                      onChange={e => handleTop(e, i)}/>
                                <button
                                    className="w-1/5 border border-gray-400 text-lg leading-tight"
                                    type={"button"}
                                    onClick={()=> handleRemoveTop(i)}
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
            </form>
        </>
    )
}
