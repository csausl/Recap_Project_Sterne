import {Link} from "react-router-dom";

export default function LandingPage(){

    return (
        <>
            <ul className="flex-container">
                <Link to={"/Infos"}><li className="flex-item">Infos</li></Link>
                <Link to={"/Plena"}><li className="flex-item">Plena</li></Link>
                <Link to={"/Lago"}><li className="flex-item">Lago</li></Link>
                <Link to={"/Werki"}><li className="flex-item">Werki</li></Link>
                <Link to={"/Routen"}><li className="flex-item">Routen</li></Link>
                <Link to={"/Events"}><li className="flex-item">Events</li></Link>
                <Link to={"/Users"}><li className="flex-item">Users</li></Link>
                <Link to={"/Admin"}><li className="flex-item">Admin</li></Link>
            </ul>
        </>
    )
}