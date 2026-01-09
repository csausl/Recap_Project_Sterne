import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <>
            <Link to={"/"}><button className={"topBar"}>Home</button></Link>
            <Link to={"/Infos"}><button className={"topBar"}>Infos</button></Link>
            <Link to={"/Plena"}><button className={"topBar"}>Plena</button></Link>
            <Link to={"/Werki"}><button className={"topBar"}>Werki</button></Link>
            <Link to={"/Routen"}><button className={"topBar"}>Routen</button></Link>
            <Link to={"/Events"}><button className={"topBar"}>Events</button></Link>
        </>
    )
}