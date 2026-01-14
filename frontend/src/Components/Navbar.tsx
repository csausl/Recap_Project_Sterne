import {Link} from "react-router-dom";

export default function Navbar(){
    return (
        <div className={"topBar mb-10 mt-7 text-2xl font-semibold"}>
            <Link to={"/"}><button >Home</button></Link>
            <Link to={"/Infos"}><button >Infos</button></Link>
            <Link to={"/Plena"}><button >Plena</button></Link>
            <Link to={"/Werki"}><button >Werki</button></Link>
            <Link to={"/Events"}><button >Events</button></Link>
        </div>
    )
}