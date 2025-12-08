import './App.css'
import axios from "axios";
import {useState} from "react";

type Subgroup ="WERKSTATT" | "FEMINISTA" | "RSG"|"RSL"|undefined

type Plenumstermin={
    id: string,
    date: string,
    group: Subgroup
    tops: string[]
}

function App() {

    const [plena, setPlena] = useState<Plenumstermin[]>([]);

    function getAllPlena(){
        axios.get("/api/plena").then((response) => {
            console.log(response.data);
            setPlena(response.data);
        })

    }
    function clear(){
        setPlena([])
    }

  return (
    <>
      <h1>hallo</h1>
        <button onClick={getAllPlena}>Get All!</button>
        <button onClick={clear}>clear!</button>
        <div>
            {plena.map((plenum) => (
                <>
                    <p>id: {plenum.id}</p>
                    <p>date: {plenum.date}</p>
                    <p>group: {plenum.group}</p>
                    <ul>Tops:
                        {plenum.tops.map(top => (<li>{top}</li>))}
                    </ul>

                </>
      ))}
        </div>
    </>
  )
}

export default App
