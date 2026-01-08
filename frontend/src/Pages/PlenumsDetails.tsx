import {useEffect, useState} from "react";

import {type PlenumsTermin} from "../Types/Types.ts";
import PlenumsCard from "../Components/PlenumsCard.tsx";
import {Link, useParams} from "react-router-dom";
import axios from "axios";

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
        <div className={"topBar"}>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1 className={"pageName"}>Plenum Details</h1>
            <button className={"logoutButton"}>logout</button>
        </div>
        <div className={"mainContainer"}>
           <div className={"rightContainer"}>
               <div>
                   {!plenum ? <div>loading..</div> : <PlenumsCard plenum={plenum} key={plenum.id}/>}
               </div>
            </div>
        </div>
        </>
    )
}