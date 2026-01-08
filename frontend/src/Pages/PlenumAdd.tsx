import {Link} from "react-router-dom";
import AddPlenumsTerminCard from "../Components/AddPlenumsTerminCard.tsx";

export default function PlenumAdd(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Add a Termin</h1>
            <AddPlenumsTerminCard />
        </>
    )
}