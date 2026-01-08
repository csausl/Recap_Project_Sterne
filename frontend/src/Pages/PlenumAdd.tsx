
import AddPlenumsTerminCard from "../Components/AddPlenumsTerminCard.tsx";
import Navbar from "../Components/Navbar.tsx";

export default function PlenumAdd(){
    return(
        <>
            <header className={"topBar"}><Navbar/></header>
            <h1>Add a Termin</h1>
            <div className={"mainContainer"}>
                <AddPlenumsTerminCard/>
            </div>

        </>
    )
}