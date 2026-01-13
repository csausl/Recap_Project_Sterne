import type {PlenumsTermin} from "../Types/Types.ts";

type PlenumsCardLightProps={
    plenum:PlenumsTermin
}



export default function PlenumsCardLight(props:Readonly<PlenumsCardLightProps>) {
    let cardStyle;
    const date=(new Date()).toISOString();

    if(props.plenum.date < date){
        cardStyle = {backgroundColor: "lightgray"};
    }
    else {
        switch (props.plenum.group){
            case "ALLE":
                cardStyle = {backgroundColor: "#F1F7B5"};
                break;
            case "WERKSTATT":
                cardStyle = {backgroundColor: "#A8D1D1"};
                break;
            case "FEMINISTA":
                cardStyle = {backgroundColor: "#D8CDF0"};
                break;
            case "RSL":
                cardStyle = {backgroundColor: "#C6DEF1"};
                break;
            case "RSG":
                cardStyle = {backgroundColor: "#FFCBCB"};
                break;
        }
    }

    return (
        <div id="card" className={"plenumsCardLight"} key={props.plenum.id} style={cardStyle}>
            <p className={"cardGroup"}>{props.plenum.group}</p>
            <p>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</p>
        </div>
    )


}

