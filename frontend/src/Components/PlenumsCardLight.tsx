import type {PlenumsTermin} from "../Types/Types.ts";

type PlenumsCardLightProps={
    plenum:PlenumsTermin
}



export default function PlenumsCardLight(props:Readonly<PlenumsCardLightProps>) {
   return (
                <div className={"plenumsCard"} key={props.plenum.id}>
                    <p>{props.plenum.group}</p>
                    <p>{props.plenum.date}</p>
                </div>
    )
}

