import { useState } from "react";
import Header from "./assets/components/Header";

import "./App.css";

function App() {
  const [switch1, setSwitch1] = useState(false);
  // const [switch2, setSwitch2] = useState(false);
  // const [switch3, setSwitch3] = useState(false);

  return (
    <>
      <div>
        <Header />
      </div>

      <section>
        <div>
          <div>
            <button
              className={switch1 === true ? "purple" : "white"}
              // Au clique sur ce bouton, la fonction présente dans le onClick est appelée
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              <p> ON</p>
            </button>
            <button
              className={switch1 === true ? "purple" : "white"}
              onClick={() => {
                setSwitch1(!switch1);
              }}
            >
              <p> OFF</p>
            </button>
          </div>
          <div>
            <button></button>
          </div>
          <div>
            <button></button>
          </div>
        </div>
        <p>No way</p>
      </section>
    </>
  );
}

export default App;
