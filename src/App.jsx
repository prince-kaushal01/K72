import Navbar from "./components/home/Navbar";
import Main from "./components/home/Main";
import Home from "./components/agency/Home";
import Project from "./components/project/Project";
import { Route, Routes } from "react-router-dom";

const App = () => {

  return (
    <div className="h-screen w-full relative selection:bg-[#D3FD50] selection:text-black">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/agency" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;
