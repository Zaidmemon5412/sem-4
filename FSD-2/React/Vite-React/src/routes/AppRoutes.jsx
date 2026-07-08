import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import Navbar from "../shared/component/Navbar";
import Clock from "../shared/component/Clock";
import Task1 from "./Tasks/Task1";
import UD1 from "./Tasks/UD1";
import Hooks from "./Pages/Hooks";
import Us2 from "./Hooks/useState/Us2";
import Us1 from "./Hooks/useState/Us1";
import Us3 from "./Hooks/useState/Us3";
import Ur2 from "./Hooks/useReducer/Ur2";
import Uc1 from "./Hooks/useContext/dark&Light/Uc1";
import Comp1 from "./Hooks/useContext/task2/Comp1";
import F1 from "./Hooks/useContext/task3/F1";
import Us4 from "./Hooks/useState/Us4";
import Us10 from "./Hooks/useState/Us10";

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
          <Route path="/hooks/Us4" element={<Us4 />} />
          <Route path="/hooks/Us10" element={<Us10 />} />
          <Route path="/hooks/Ur2" element={<Ur2 />} />
          <Route path="/hooks/Uc1" element={<Uc1 />} />
          <Route path="/hooks/Uc2" element={<Comp1 />} />
          <Route path="/hooks/Uc3" element={<F1 />} />
        </Routes>
      </Router>
    </>
  );
}
export default Main;
