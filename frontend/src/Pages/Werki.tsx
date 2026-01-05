import {Link} from "react-router-dom";

export default function Werki(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Werki</h1>
        </>
    )
}