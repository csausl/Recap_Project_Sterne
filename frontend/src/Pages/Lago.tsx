import {Link} from "react-router-dom";

export default function Lago(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Lago</h1>
        </>
    )
}