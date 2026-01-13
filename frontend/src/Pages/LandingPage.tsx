import {Link} from "react-router-dom";
function myFunction() {
    alert("whooohooo!");
}

function myFunction2() {
    let txt;
    if (confirm("Press a button!")) {
        txt = "<button onClick={myFunction} >You pressed OK!</button>";
    } else {
        txt = "You pressed Cancel!";
    }
    if(document != null){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        document.getElementById("demo").innerHTML = txt;
    }

}
function myFunction4() {
    const x = document.getElementById("myDIV");
    if(x!=null){
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }


}
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