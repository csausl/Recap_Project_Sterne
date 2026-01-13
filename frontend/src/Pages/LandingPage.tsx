import {Link} from "react-router-dom";

export default function LandingPage(){



    return (
        <>
            <header className={"topBar"} ><h1>Du bist mein Stern</h1></header>
            <ul className="flex-container">
                <Link to={"/Infos"}>
                    <li className="categoryCard">Infos</li>
                </Link>
                <Link to={"/Plena"}>
                    <li className="categoryCard">Plena</li>
                </Link>
                <Link to={"/Werki"}>
                    <li className="categoryCard">Werki</li>
                </Link>
                <Link to={"/Routen"}>
                    <li className="categoryCard">Routen</li>
                </Link>
                <Link to={"/Events"}>
                    <li className="categoryCard">Events</li>
                </Link>
            </ul>
        </>
    )
}