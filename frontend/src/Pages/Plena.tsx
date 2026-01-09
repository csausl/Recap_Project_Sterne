import {useEffect, useState} from "react";
import axios from "axios";
import {type PlenumsTermin} from "../Types/Types.ts";
import {Link} from "react-router-dom";
import PlenumsCardLight from "../Components/PlenumsCardLight.tsx";
import Navbar from "../Components/Navbar.tsx";


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
            <header className={"topBar"}><Navbar/></header>

            <div className={"mainContainer"}>
                <div className={"leftContainer"}>
                    <div>
                        {!(plena==undefined) ?  plena.map((plenum) => (
                            <Link to={`/Plena/${plenum.id}`} key={plenum.id} >
                                <PlenumsCardLight plenum={plenum}/>
                            </Link>
                        )) : <div>loading..</div>}
                    </div>
                </div>
                <div className={"rightContainer"}>
                    <Link to={"/Plena/add"}><div className={"flex-item"}>Add</div></Link>
                </div>

            </div>
        </>
    )
}