import "./App.css";
import Watches from "./components/Watches/Watches";
import { NavBar } from "./components/navBar/navBar";

function App() {
    return (
        <div className="">
            <NavBar></NavBar>
            <Watches></Watches>
        </div>
    );
}

export default App;
