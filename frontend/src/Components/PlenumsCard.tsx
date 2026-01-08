import type {PlenumsTermin} from "../Types/Types.ts";
import axios from "axios";

type PlenumsCardProps={
    plenum:PlenumsTermin
}



export default function PlenumsCard(props:Readonly<PlenumsCardProps>) {
    function deleteThisItem() {
        axios.delete("/api/plena/" + props.plenum.id)
            .then(res => {console.log(res.data)})
    }

    return (
                <div className={"plenumsCard"} key={props.plenum.id}>
                    <p>group: {props.plenum.group}</p>
                    <p>date: {props.plenum.date}</p>
                    <ul>Tops:
                        {props.plenum.tops.map((top,index) => (<li key={index}>{top}</li>))}
                    </ul>
                    <button onClick={deleteThisItem}>Delete!</button>
                </div>
    )
}

