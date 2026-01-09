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
            .finally(() => {backToPlena("/plena")})
    }

    function confirmDelete(){
        if(confirm("Are you sure you want to delete?")){
            deleteThisItem();
        }
    }

    return (
                <div className={"plenumsCard"} key={props.plenum.id}>
                    <p>{props.plenum.group}</p>
                    <p>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</p>
                    <ul>TOPS:
                        {props.plenum.tops.map((top,index) => (top? <li key={index}>{top}</li> : null))}
                    </ul>
                    <button onClick={confirmDelete}>Delete!</button>
                    <button onClick={props.updateToggle}>Update!</button>
                </div>
    )
}

