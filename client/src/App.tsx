import { useState } from "react";
import React from "react";
import "./App.css";
import Modal from "./Modal";


function App() {
 

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div>
        <div></div>
        <div>
          <div>
            <div>
              <button className="msm">
                <h1>MySkillMap</h1>
              </button>
              <button className="icon"></button>
              {/* <p>Learning Paths</p> */}
            </div>
            {/* <button className="Pbtn">New Path +</button> */}
            <h2>Learning Paths</h2>

            <div>
              <div className="flex flex-col items-center justify-center min-h-screen">
                {/* Button to Open Modal */}
                <button onClick={() => setIsModalOpen(true)} className="Pbtn">
                  New Path +
                </button>

                {/* Modal Component */}
                <Modal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
              <></>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
