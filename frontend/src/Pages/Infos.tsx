import Navbar from "../Components/Navbar.tsx";
import {subgroups} from "../Types/Types.ts";
import {useState} from "react";

export default function Infos() {
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        email: "",
        date: "",
        group: "",
    })
    const [tops, setTops] = useState([{
        top: "",
        timestamp: new Date().getTime(),
    }])

    console.log(userInfo);
    console.log(tops);

    const handleInput = (e) => {
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const handleTop = (e, i: number) => {
        console.log(i);
        const {name, value} = e.target;
        const newTops = [...tops];
        newTops[i][name] = value;
        setTops(newTops);
    }

    const handleRemoveTop = (i: number) => {
        const deleteTops=[...tops];
        deleteTops.splice(i,1);
        setTops(deleteTops);
    }

    const handleAddTop = () => {
        setTops([...tops, {
            top: "",
            timestamp: new Date().getTime(),
        }])
    }


    return (
        <>
            <header className={"topBar"}><Navbar/></header>
            <h1>Infos</h1>
            <form className="w-5/6 max-w-md mx-auto">
                <fieldset className="flex flex-col gap-2 border rounded border-gray-400 v py-1 px-4">
                    <legend className="text-3xl font-semibold mb-2">Information Hinzufügen</legend>
                    <label className="text-2xl font-semibold">Dein name</label>
                    <input
                        className="w-4/5 border rounded border-gray-400 text-lg leading-tight
                         py-3 px-2 mt-4 mb-3 focus:outline-2 focus:outline-red-300"
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        onChange={handleInput}
                    />
                    <label className="text-2xl font-semibold">Email Adress</label>
                    <input
                        className="w-4/5 border border-gray-400 rounded text-lg leading-tight
                         py-3 px-2 mt-4 mb-3 focus:outline-2 focus:outline-red-300"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email@email.com"
                        onChange={handleInput}
                    />
                    <label className="text-2xl font-semibold">Datum</label>
                    <input
                        className="w-4/5 border border-gray-400 rounded text-lg leading-tight
                         py-3 px-2 mt-4 mb-3 focus:outline-2 focus:outline-red-300"
                        id="date"
                        type="date"
                        name="date"
                        onChange={handleInput}
                        min="2025-01-01"
                        max="2050-12-31"
                    />
                    <label className="text-2xl font-semibold">Gruppe</label>
                    <select
                        className="w-4/5 border border-gray-400 rounded text-lg leading-tight
                         py-3 px-2 mt-4 mb-3 focus:outline-2 focus:outline-red-300"
                        id="group"
                        name="group"
                        onChange={handleInput}>
                        {subgroups.map((category) => (
                            <option value={category.value} key={category.value}>{category.label}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className="flex flex-col gap-2 border rounded border-gray-400 py-1 px-4">
                    <legend className="text-3xl font-semibold mb-2">Informationen</legend>
                    {tops.map((top, i) => (
                        <div key={top.timestamp} className="flex flex-col">
                            <label className="text-2xl font-semibold">Infopunkt {i+1}</label>
                            <div className="flex flex-row items-center">
                            <textarea className="w-4/5 text-xl mb-4 border border-dashed border-gray-400 py-2 px-2
                                        focus:outline-2 focus:outline-red-300"
                                      id="top"
                                      name="top"
                                      rows={2}
                                      placeholder="Was ist zu tun?"
                                      onChange={e => handleTop(e, i)}/>
                                <button
                                    className="w-1/5 border border-gray-400 text-lg ml-5"
                                    type={"button"}
                                    onClick={()=> handleRemoveTop(i)}
                                > - </button>
                            </div>
                        </div>
                    ))}
                    <div className="w-full flex justify-center">
                        <button
                            className="w-1/5 border border-gray-400 text-lg leading-tight"
                            type="button"
                            onClick={handleAddTop}
                        >
                            +
                        </button>
                    </div>


                </fieldset>
            </form>

        </>
    )
}