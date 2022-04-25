import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./Views/Home/Home";
import MakeEvent from "./Views/MakeEvent/MakeEvent";

function App() {
  return (
    <div className="App">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/newEvent" element={<MakeEvent />} />
          </Routes>
    </div>
  );
}

export default App;
