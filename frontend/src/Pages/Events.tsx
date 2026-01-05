import {Link} from "react-router-dom";

export default function Events(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Events</h1>
        </>
    )
}