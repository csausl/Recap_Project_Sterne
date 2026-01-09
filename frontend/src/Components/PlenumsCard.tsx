import type {PlenumsTermin} from "../Types/Types.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

type PlenumsCardProps={
    plenum:PlenumsTermin,
    updateToggle:()=>void
}

export default function PlenumsCard(props:Readonly<PlenumsCardProps>) {
    let cardStyle = {
        backgroundColor: "DodgerBlue",
    };
    const date=(new Date()).toISOString();

    if(props.plenum.date < date){
        cardStyle = {backgroundColor: "lightgray"};
    }
    else {
        if (props.plenum.group === "ALLE") {
            cardStyle = {backgroundColor: "#F1F7B5"};
        } else if (props.plenum.group === "WERKSTATT") {
            cardStyle = {backgroundColor: "#A8D1D1"};
        } else if (props.plenum.group === "FEMINISTA") {
            cardStyle = {backgroundColor: "#D8CDF0"};
        } else if (props.plenum.group === "RSL") {
            cardStyle = {backgroundColor: "#C6DEF1"};
        } else if (props.plenum.group === "RSG") {
            cardStyle = {backgroundColor: "#FFCBCB"};
        }
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
                <div className={"plenumsCard"} key={props.plenum.id} style={cardStyle}>
                    <p className={"cardGroup"}>{props.plenum.group}</p>
                    <p>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</p>
                    <p>TOPS:</p>
                    <ul>{props.plenum.tops.map((top,index) => (top? <li key={index}>{top}</li> : null))}</ul>
                    <button onClick={confirmDelete}>Delete!</button>
                    <button onClick={props.updateToggle}>Update!</button>
                </div>
    )
}

