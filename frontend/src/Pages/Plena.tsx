import {useEffect, useState} from "react";
import axios from "axios";
import {type PlenumsTermin} from "../Types/Types.ts";
import {Link} from "react-router-dom";
import PlenumsCardLight from "../Components/PlenumsCardLight.tsx";


export default function Plena() {

    const [plena, setPlena] = useState<PlenumsTermin[]>([]);

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
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1 className={"pageName"}></h1>
            <button className={"logoutButton"}>logout</button>
        </div>
        <div className={"mainContainer"}>
            <div className={"leftContainer"}>
                <Link to={"/Plena/add"}><div className={"flex-item"}>Add</div></Link>
                <div className={"flex-item"} onClick={getAllPlena}>Get All!</div>
            </div>
            <div className={"rightContainer"}>
                <div>
                    {!plena ? <div>LOADING..</div> : plena.map((plenum) => (
                            <Link to={`/Plena/${plenum.id}`} key={plenum.id} >
                                    <PlenumsCardLight plenum={plenum}/>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}