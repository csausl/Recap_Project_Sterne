import {Link} from "react-router-dom";

export default function Routen(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Routen</h1>
        </>
    )
}