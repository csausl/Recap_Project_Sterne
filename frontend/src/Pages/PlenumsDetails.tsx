import {useEffect, useState} from "react";

import {type PlenumsTermin} from "../Types/Types.ts";
import PlenumsCard from "../Components/PlenumsCard.tsx";
import {useParams} from "react-router-dom";
import axios from "axios";
import Navbar from "../Components/Navbar.tsx";
import PlenumUpdateForm from "../Components/PlenumUpdateForm.tsx";

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

export default function PlenumsDetails() {
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

    useEffect(() => {
        getPlenumById();
    },[])

    return (
        <>
            <header className={"topBar"}><Navbar/></header>
        <div className={"mainContainer"}>
           <div className={""}>
               <div>
                   {plenum ? <PlenumsCard plenum={plenum} updateToggle={updateToggle}/> : <div>loading..</div>}
               </div>
            </div>
            <div id="updateDiv" className="">
                <div  className={""}>
                    {plenum? <PlenumUpdateForm plenum={plenum} onUpdate={getPlenumById}/> : <div>loading..</div>}
                </div>
            </div>
        </div>

        </>
    )
}