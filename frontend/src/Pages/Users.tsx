import {Link} from "react-router-dom";

export default function Users(){
    return(
        <>
            <Link to={"/"}><button className={"backbutton"}>Home</button></Link>
            <h1>Users</h1>
        </>
    )
}