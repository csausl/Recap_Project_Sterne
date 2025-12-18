import {useEffect, useState} from "react";
import axios from "axios";
import {type PlenumsTermin} from "../Types/Types.ts";
import PlenumsCard from "../Components/PlenumsCard.tsx";

import AddPlenumsTerminCard from "../Components/AddPlenumsTerminCard.tsx";


export default function Testpage() {

    const [plena, setPlena] = useState<PlenumsTermin[]>([]);

    function clear(){
        setPlena([])
    }

    function getAllPlena(){
        axios.get("/api/plena").then((response) => {
            console.log(response.data);
            setPlena(response.data);
        })

    }

    useEffect(() => {
        getAllPlena();
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
                <AddPlenumsTerminCard/>

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