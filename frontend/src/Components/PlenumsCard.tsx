import type {PlenumsTermin} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type PlenumsCardProps={
    plenum:PlenumsTermin,
    updateToggle:()=>void
}

export default function PlenumsCard(props:Readonly<PlenumsCardProps>) {
    let style;
    switch (props.plenum.group){
        case "ALLE":
            style = {backgroundColor: "#F1F7B5"};
            break;
        case "WERKSTATT":
            style = {backgroundColor: "#A8D1D1"};
            break;
        case "FEMINISTA":
            style = {backgroundColor: "#D8CDF0"};
            break;
        case "RSL":
            style = {backgroundColor: "#C6DEF1"};
            break;
        case "RSG":
            style = {backgroundColor: "#FFCBCB"};
            break;
    }


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
                <div className={"plenumsCard"} key={props.plenum.id} style={style}>
                    <p className={"cardGroup"}>{props.plenum.group}</p>
                    <p>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</p>
                    <p>TOPS:</p>
                    <ul>{props.plenum.tops.map((top,index) => (top? <li key={index}>{top}</li> : null))}</ul>
                    <button onClick={confirmDelete}>Löschen!</button>
                    <button onClick={props.updateToggle}>Ändern!</button>
                </div>
    )
}

