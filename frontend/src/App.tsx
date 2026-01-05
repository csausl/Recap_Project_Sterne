import LandingPage from "./Pages/LandingPage.tsx";
import {Route, Routes} from "react-router-dom";
import Plena from "./Pages/Plena.tsx";
import Lago from "./Pages/Lago.tsx";
import Werki from "./Pages/Werki.tsx";
import Routen from "./Pages/Routen.tsx";
import Users from "./Pages/Users.tsx";
import Admin from "./Pages/Admin.tsx";
import Events from "./Pages/Events.tsx";
import Infos from "./Pages/Infos.tsx";


function App() {



  return (
    <>
        <header><title>Sterne</title></header>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path={"/Infos"} element={<Infos/>}/>
            <Route path={"/Plena"} element={<Plena/>}/>
            <Route path={"/Lago"} element={<Lago/>}/>
            <Route path={"/Werki"} element={<Werki/>}/>
            <Route path={"/Routen"} element={<Routen/>}/>
            <Route path={"/Events"} element={<Events/>}/>
            <Route path={"/Users"} element={<Users/>}/>
            <Route path={"/Admin"} element={<Admin/>}/>
        </Routes>
    </>
  )
}

export default App
