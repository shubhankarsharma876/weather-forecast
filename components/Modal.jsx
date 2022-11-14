import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState("");
  const [feedbackdb, setFeedbackdb] = useState("");
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const displayInfo = () => {
    console.log(name + " " + email + " " + feedbackdb);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal border-2 border-black rounded-xl mb-8"
      >
        Feedback
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content ">
            <div>
              <h1 className="text-2xl pb-3 pl-2">Feedback Form</h1>
              <div>
                <div className="flex gap-2 p-2  mt-5 text-xl ">
                  <p className="justify-start">Name: </p>
                  <input
                    type="text"
                    className="rounded-md w-[370px] ml-7 "
                    onChange={(event) => setName(event.target.value)}
                  ></input>
                </div>

                <div className="flex gap-2 p-2  mt-5 text-xl  ">
                  <p className="justify-start">Email: </p>
                  <input
                    type="email"
                    className="rounded-md w-[370px] ml-9"
                    onChange={(event) => setEmail(event.target.value)}
                  ></input>
                </div>
                <div className="flex gap-2 p-2  mt-5 text-xl ">
                  <p className="justify-start">Feedback: </p>
                  <input
                    type="text"
                    className="rounded-md w-[370px]"
                    onChange={(event) => setFeedbackdb(event.target.value)}
                  ></input>
                </div>
              </div>
            </div>

            <button
              className="close-modal border-2 rounded-xl border-black"
              onClick={toggleModal}
            >
              Close
            </button>

            <button
              className="border-2 border-black rounded-xl mt-6 p-2 w-1/2 ml-[25%]"
              onClick={displayInfo}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}
