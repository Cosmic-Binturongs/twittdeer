import "./App.css";
import { useState, useEffect } from "react";
import Profiletab from "./components/profiletab/Profiletab.js";
import Profilebutton from "./components/profilebutton/Profilebutton.js";

function App() {
  const [show, setShow] = useState({ display: "flex" });
  const closeBox = () => {
    setShow({ display: "none" });
  };
  const handleClick = () => {
    setShow({ display: "flex" });
  };

  return (
    <div className="fullDiv">
      <Profilebutton click={handleClick} />
      <Profiletab
        name={"verybamboo"}
        tweets={114}
        likes={426}
        click={closeBox}
        show={show}
      />
      <div className="mid">2</div>
      <div className="right">3</div>
    </div>
  );
}

export default App;
