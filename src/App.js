import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashbord from "./Components/Dashbord";

import Search from "./Components/Search";

import Contac from "./Components/Contac";

import Wallet from "./Components/Wallet";

import Settings from "./Components/Settings";
// import Home from './Components/Home';
import Homepage from "./Components/Homepage";
import Sidebar from "./Components/Sidebar";
import Practice from "./Components/Practice";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashbord />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/" index element={<Homepage />} />

          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={< Signup/>} />
          

          <Route path="/contact" element={<Contac />} />

          <Route path="/wallet" element={<Wallet />} />
          <Route path="/sidebar" element={<Sidebar />} />

          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
