import React from "react";

function ConfirmDialog(props) {

  const clickedOverlay = () => {
    props.setModal(false)
  };
  const clickedYes = () => {
    props.setModal(false)
    props.setAccepted(true);
  };
  const clickedCancel = () => {
    props.setModal(false)
  };

  return (
    <div>
      <div
        className="w-full h-full absolute left-0 top-0 z-10 pt-24 "
        style={{ background: `rgba(0, 0, 0, 0.6)` }}
        onClick={clickedOverlay}
      ></div>
      <div className="absolute left-0 top-0 right-0 mt-10 bg-white w-96 border z-20 border-gray-300 rounded-md text-center mx-auto py-5">
        <p>{props.message}</p>
        <div className="mt-5">
          <button className="bg-green-500 hover:bg-green-600 py-1 px-10 rounded-md text-white mr-1" onClick={clickedYes}>
            Yes
          </button>
          <button className="bg-red-500 hover:bg-red-600 py-1 px-10 rounded-md text-white ml-1" onClick={clickedCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
