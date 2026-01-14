
import AddPlenumsTerminCard from "../Components/AddPlenumsTerminCard.tsx";
import Navbar from "../Components/Navbar.tsx";

export default function PlenumAdd(){
    return(
        <div className={"flex flex-col items-center"}>
            <header className={"topBar"}><Navbar/></header>
            <div>
                <AddPlenumsTerminCard/>
            </div>
        </div>
    )
}