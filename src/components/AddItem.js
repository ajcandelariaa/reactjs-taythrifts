import React from "react";

function AddItem(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setShowAdd(false);
  };

  return (
    <div>
      <div className="m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Add Item</h1>
        <form onSubmit={handleSubmit}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Name</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Description</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Actual Price</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Last Price</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Category</label>
                <select className="w-full">
                  <option>Tops</option>
                  <option>Pants</option>
                  <option>Dresses</option>
                  <option>Shorts</option>
                  <option>Others</option>
                </select>
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Image</label>
                <input type="file" className="w-full" />
              </div>
              <div className="grid grid-cols-1 mt-4 items-center justify-items-center">
                <img
                  src="../images/sampleItem.jpg"
                  alt="sampleItem"
                  className="w-36 h-36 object-center"
                />
              </div>

              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
