import type {PlenumsTermin} from "../Types/Types.ts";
import axios from "axios";

type PlenumsCardProps={
    plenum:PlenumsTermin
    onTerminChange: ()=>void
}



export default function PlenumsCard(props:Readonly<PlenumsCardProps>) {
    function deleteThisItem() {
        axios.delete("/api/plena/" + props.plenum.id)
            .then(res => {console.log(res.data)})
            .then(props.onTerminChange)
    }

    return (

                <div className={"plenumsCard"} key={props.plenum.id}>
                    <p>id: {props.plenum.id}</p>
                    <p>date: {props.plenum.date}</p>
                    <p>group: {props.plenum.group}</p>
                    <ul>Tops:
                        {props.plenum.tops.map((top,index) => (<li key={index}>{top}</li>))}
                    </ul>
                    <button onClick={deleteThisItem}>Delete!</button>
                </div>
    )
}

