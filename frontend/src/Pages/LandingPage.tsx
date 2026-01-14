import {Link} from "react-router-dom";

export default function LandingPage(){

    return (
        <div className="flex flex-col items-center">
            <header className={"topBar mb-10 mt-1"}>
                <h1 className={"text-5xl pt-10 font-semibold"}>Hallo liebe Sterne</h1>
            </header>
            <div className="flex-container w-4/6">
                <Link to={"/Infos"}>
                    <div className="categoryCard px-8 py-10 text-center text-5xl font-bold content-center m-8">Infos</div>
                </Link>
                <Link to={"/Plena"}>
                    <div className="categoryCard px-8 py-10 text-center text-5xl font-bold content-center m-8">Plena</div>
                </Link>
                <Link to={"/Werki"}>
                    <div className="categoryCard px-8 py-10 text-center text-5xl font-bold content-center m-8">Werki</div>
                </Link>
                <Link to={"/Events"}>
                    <div className="categoryCard px-8 py-10 text-center text-5xl font-bold content-center m-8">Events</div>
                </Link>
            </div>
        </div>
    )
}