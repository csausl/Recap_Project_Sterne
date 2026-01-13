import {Link} from "react-router-dom";

export default function LandingPage(){

    return (
        <>
            <div className="flex-container">
                <Link to={"/Infos"}>
                    <div className="categoryCard text-center text-5xl font-bold content-center m-8">Infos</div>
                </Link>
                <Link to={"/Plena"}>
                    <div className="categoryCard text-center text-5xl font-bold content-center m-8">Plena</div>
                </Link>
                <Link to={"/Werki"}>
                    <div className="categoryCard text-center text-5xl font-bold content-center m-8">Werki</div>
                </Link>
                <Link to={"/Routen"}>
                    <div className="categoryCard text-center text-5xl font-bold content-center m-8">Routen</div>
                </Link>
                <Link to={"/Events"}>
                    <div className="categoryCard text-center text-5xl font-bold content-center m-8">Events</div>
                </Link>
            </div>
        </>
    )
}