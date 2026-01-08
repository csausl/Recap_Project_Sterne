import type {PlenumsTermin} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type PlenumsCardProps={
    plenum:PlenumsTermin,
    updateToggle:()=>void
}

export default function PlenumsCard(props:Readonly<PlenumsCardProps>) {
   const backToPlena = useNavigate();

    function deleteThisItem() {
        axios.delete("/api/plena/" + props.plenum.id)
            .then(res => {console.log(res.data)})
            .then(() => {backToPlena("/plena")})
    }

    function confirmDelete(){
        if(confirm("Are you sure you want to delete?")){
            deleteThisItem();
        }
    }

    return (
                <div className={"plenumsCard"} key={props.plenum.id}>
                    <p>{props.plenum.group}</p>
                    <p>{props.plenum.date}</p>
                    <ul>Tops:
                        {props.plenum.tops.map((top,index) => (<li key={index}>{top}</li>))}
                    </ul>
                    <button onClick={confirmDelete}>Delete!</button>
                    <button onClick={props.updateToggle}>Update!</button>
                </div>
    )
}

