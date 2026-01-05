import {Link} from "react-router-dom";

export default function Admin(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Admin</h1>
        </>
    )
}