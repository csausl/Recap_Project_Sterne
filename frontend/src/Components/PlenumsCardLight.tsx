import type {PlenumsTermin} from "../Types/Types.ts";

type PlenumsCardLightProps={
    plenum:PlenumsTermin
}



export default function PlenumsCardLight(props:Readonly<PlenumsCardLightProps>) {
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

    return (
        <div id="card" className={"plenumsCardLight"} key={props.plenum.id} style={cardStyle}>
            <p className={"cardGroup"}>{props.plenum.group}</p>
            <p>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</p>
        </div>
    )


}

