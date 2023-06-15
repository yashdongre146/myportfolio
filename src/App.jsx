import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";

function App() {
  const [openMenu, setMenu] = useState(false);
  return (
    <div className="app">
      <Topbar openMenu={openMenu} setMenu={setMenu}/>
      <Menu openMenu={openMenu} setMenu={setMenu}/> 
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;

