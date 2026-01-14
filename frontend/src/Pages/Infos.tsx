import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar.tsx";

export default function LandingPage(){

    return (
        <div className="flex flex-col items-center">
            <header className={"topBar"}><Navbar/></header>
            <div className=" flex-container flecx max-w-10/12">
                <Link to={"/"}>
                    <div className="categoryCard size-fit px-5 py-10 text-center text-5xl font-bold content-center m-3">Onboarding</div>
                </Link>
                <Link to={"/"}>
                    <div className="categoryCard size-fit px-5 py-10 text-center text-5xl font-bold content-center m-3">Chatgruppen</div>
                </Link>
                <Link to={"/"}>
                    <div className="categoryCard size-fit px-5 py-10 text-center text-5xl font-bold content-center m-3">Ansprechpersonen</div>
                </Link>
                <Link to={"/"}>
                    <div className="categoryCard size-fit px-5 py-10 text-center text-5xl font-bold content-center m-3">Orte</div>
                </Link>
                <Link to={"/"}>
                    <div className="categoryCard size-fit px-5 py-10 text-center text-5xl font-bold content-center m-3">Ausfahrten</div>
                </Link>
                <Link to={"/"}>
                    <div className="categoryCard size-fit px-5 py-10 text-center text-5xl font-bold content-center m-3">Selbstverständnis</div>
                </Link>
            </div>
        </div>
    )
}