import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Home from "./sections/Home";
import SignUp from "./sections/SignUp";
import LogIn from "./sections/LogIn";
import Profile from "./sections/Profile";
import AboutUs from "./sections/AboutUs";
import Franchise from "./sections/Franchise";
import FranchiseDetail from "./sections/FranchiseDetail";
import Starup from "./sections/Startup";
import StartupDetail from "./sections/startupDetail";
import Summit from "./sections/Summit";
import SummitDetail from "./sections/SummitDetail";

export default function App() {
  return (


      <Routes>
        <Route path="/" element={<Home />} />  {/* Home route */}
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/summit" element={<Summit />} />
        <Route path="/summit/:id" element={<SummitDetail />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/startup" element={<Starup />} />
        <Route path="/franchise/:id" element={<FranchiseDetail />} />
        <Route path="/startup/:id" element={<StartupDetail />} />
        
      </Routes>


  
  );
}
