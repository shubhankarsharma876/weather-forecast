import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [feedback, setFeedback] = useState(false);

  const toggleModal = () => {
    setFeedback(!feedback);
  };

  if (feedback) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal border-2 border-black rounded-xl mb-3"
      >
        Feedback
      </button>

      {feedback && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div>
              <h1 className="text-2xl">Feedback Form</h1>
              <div>
                <div className="flex gap-2 p-2  mt-5 text-xl ">
                  <p className="justify-start">Name: </p>
                  <input className="rounded-md"></input>
                </div>
                <div className="flex gap-2 p-2  mt-5 text-xl  ">
                  <p className="justify-start">Email: </p>
                  <input className="rounded-md"></input>
                </div>
                <div className="flex gap-2 p-2  mt-5 text-xl ">
                  <p className="justify-start">Feedback: </p>
                  <input className="rounded-md"></input>
                </div>
              </div>
            </div>

            <button
              className="close-modal border-2 rounded-xl border-black"
              onClick={toggleModal}
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
