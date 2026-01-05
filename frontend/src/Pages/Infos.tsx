import {Link} from "react-router-dom";

export default function Infos(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Infos</h1>
        </>
    )
}