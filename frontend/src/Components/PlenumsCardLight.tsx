import type {PlenumsTermin} from "../Types/Types.ts";

type PlenumsCardLightProps={
    plenum:PlenumsTermin
}



export default function PlenumsCardLight(props:Readonly<PlenumsCardLightProps>) {
   return (
                <div className={"plenumsCardLight"} key={props.plenum.id}>
                    <p>{props.plenum.group}</p>
                    <p>{(new Date(Date.parse(props.plenum.date))).toLocaleDateString("de-EU")}</p>
                </div>
    )
}

