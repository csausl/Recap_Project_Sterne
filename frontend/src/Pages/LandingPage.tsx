import {Link} from "react-router-dom";

export default function LandingPage(){
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


    return (
        <>
            <header className={"topBar"} ><h1>Du bist mein Stern</h1></header>


            <ul className="flex-container">
                <Link to={"/Infos"}>
                    <li className="flex-item">Infos</li>
                </Link>
                <Link to={"/Plena"}>
                    <li className="flex-item">Plena</li>
                </Link>
                <Link to={"/Werki"}>
                    <li className="flex-item">Werki</li>
                </Link>
                <Link to={"/Routen"}>
                    <li className="flex-item">Routen</li>
                </Link>
                <Link to={"/Events"}>
                    <li className="flex-item">Events</li>
                </Link>
            </ul>


            <h2>Testecke</h2>

            <button onClick={myFunction}>Info Popup</button>

            <button onClick={myFunction2}>confirm popup</button>

            <p id="demo"></p>

            <button onClick={myFunction4}>Click Me</button>

            <div id="myDIV">
                This is my DIV element.
                <button onClick={myFunction}>Info Popup</button>
            </div>
        </>
    )
}