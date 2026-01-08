import {useEffect, useState} from "react";

import {type PlenumsTermin} from "../Types/Types.ts";
import PlenumsCard from "../Components/PlenumsCard.tsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar.tsx";
import AddPlenumsTerminCard from "../Components/PlenumUpdateForm.tsx";

export default function PlenumsDetails() {
    //const beispielTermin:PlenumsTermin={id:"1",date:"1.1.2011",group:"ALLE",tops:["","",""]};
    const params = useParams();
    const [plenum,setPlenum]=useState<PlenumsTermin>();

    function getPlenumById(){
        axios.get("/api/plena/"+params.plenumId).then((response) => {
            console.log(response.data);
            setPlenum(response.data);
        })
    }

    useEffect(() => {
        getPlenumById();
    },[])

    return (
        <>
            <header className={"topBar"}><Navbar/></header>
        <div className={"mainContainer"}>
           <div className={"rightContainer"}>
               <div>
                   {!plenum ? <div>loading..</div> : <PlenumsCard plenum={plenum}/>}
               </div>
            </div>
        </div>
            <h1>Update:</h1>
            <div className={"mainContainer"}>

                {!plenum? <div>loading..</div> : <AddPlenumsTerminCard plenum={plenum} onUpdate={getPlenumById}/>}
            </div>
        </>
    )
}