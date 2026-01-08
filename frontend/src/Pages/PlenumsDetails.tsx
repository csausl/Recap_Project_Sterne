import {useEffect, useState} from "react";

import {type PlenumsTermin} from "../Types/Types.ts";
import PlenumsCard from "../Components/PlenumsCard.tsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar.tsx";
import AddPlenumsTerminCard from "../Components/PlenumUpdateForm.tsx";

export default function PlenumsDetails() {
    //const beispielTermin:PlenumsTermin={id:"1",date:"1.1.2011",group:"ALLE",tops:["","",""]};
    const parameter = useParams();
    const [plenum,setPlenum]=useState<PlenumsTermin>();

    function getPlenumById(){
        axios.get("/api/plena/"+parameter.plenumId)
            .then((response) => {
                console.log(response.data);
                setPlenum(response.data);
            }
        )
    }

    function updateToggle() {
        const x = document.getElementById("updateDiv");
        if(x!=null){
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
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
                   {!plenum ? <div>loading..</div> : <PlenumsCard plenum={plenum} updateToggle={updateToggle}/>}
               </div>
            </div>
        </div>
            <div id="updateDiv">
                <h1>Update:</h1>
                <div  className={"mainContainer"}>
                    {!plenum? <div>loading..</div> : <AddPlenumsTerminCard plenum={plenum} onUpdate={getPlenumById}/>}
                </div>
            </div>
        </>
    )
}