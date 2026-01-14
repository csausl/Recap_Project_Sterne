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
        <>
            <div className={"plenumsCard min-w-xs min-h-min px-5 py-5"} key={props.plenum.id} style={style}>
                <fieldset className="flex flex-col items-start my-2">
                    <legend className={"text-2xl mb-3"}>Details:</legend>
                    <label></label>
                    <div className={"cardGroup text-3xl pl-2"}>{props.plenum.group}</div>
                    <label></label>
                    <div className={"text-3xl pl-2"}>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</div>

                </fieldset>
                <fieldset className=" my-2">
                    <legend className={"text-2xl mt-3 mb-3"}>TOPs:</legend>
                    <div>
                        <ul className="list-disc pl-6 min-w-min">
                        {props.plenum.tops.map((top,index) => (
                            top? <li key={index} className={"text-justify max-w-3/4"}>{top}</li> : null))}
                        </ul>
                    </div>
                </fieldset>
                <fieldset className="flex flex-col items-start my-2">
                    <div className="flex flex-row">
                        <button onClick={confirmDelete}>Löschen!</button>
                        <button onClick={props.updateToggle}>Ändern!</button>
                    </div>
                </fieldset>
            </div>
        </>
    )
}

