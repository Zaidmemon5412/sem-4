import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Navbar from "../shared/component/Navbar";
import Clock from "../shared/component/Clock";
import Task1 from "./Tasks/Task1";
import UD1 from "./Tasks/UD1";
import Hooks from "./Hooks";
import Us2 from "./Hooks/Us2";
import Us1 from "./Hooks/Us1";
import Us3 from "./Hooks/Us3";

function Main() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Timer" element={<Clock />}></Route>
          <Route path="/Task1" element={<Task1 />}></Route>
          <Route path="/UD1" element={<UD1 />}></Route>
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/hooks/us1" element={<Us1 />} />
          <Route path="/hooks/Us2" element={<Us2 />} />
          <Route path="/hooks/Us3" element={<Us3 />} />
        </Routes>
      </Router>
    </>
  );
}
export default Main;
