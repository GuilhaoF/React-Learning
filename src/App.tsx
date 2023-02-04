import "./App.css";
import PeopleList from "./components/PeopleList";
import { Reducer } from "./components/Reducer";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <div className="App">
      <Reducer />
      <PeopleList />
      <h2>Rotas : </h2>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
