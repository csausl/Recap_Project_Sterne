
import AddPlenumsTerminCard from "../Components/AddPlenumsTerminCard.tsx";
import Navbar from "../Components/Navbar.tsx";

export default function PlenumAdd(){
    return(
        <div className={"flex flex-col justify-center"}>
            <header className={"topBar"}><Navbar/></header>
            <h1>Termin hinzufügen</h1>
            <div className={"flex flex-col  items-center "}>
                <AddPlenumsTerminCard/>
            </div>
        </div>
    )
}