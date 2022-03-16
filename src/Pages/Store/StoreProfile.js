import React from "react";

function StoreProfile() {
  const handleSubmit1 = (e) => {
    e.preventDefault();
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
  };

  const handleSubmit3 = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Edit Store Image</h1>
        <form onSubmit={handleSubmit3}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Upload Image</label>
                <input type="file" className="w-full" />
              </div>
              <div className="mt-5 w-52 h-52 mx-auto">
                <img src="../images/sampleResto.jpg" alt="sampleResto" className="object-cover w-full h-full" />
              </div>
              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      
      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Edit Profile</h1>
        <form onSubmit={handleSubmit1}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Name</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Email</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Username</label>
                <input type="text" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Contact Number</label>
                <input type="date" className="w-full" />
              </div>

              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Address</label>
                <input type="text" className="w-full" />
              </div>

              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="w-1/2 m-auto py-16 bg-regFormBg my-10">
        <h1 className="text-center text-xl mb-5">Edit Password</h1>
        <form onSubmit={handleSubmit2}>
          <div className="grid items-center justify-items-center w-full">
            <div>
              <div className="grid grid-cols-regForm gap-6 mt-5 w-full">
                <label className="text-right">Current Password</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">New Password</label>
                <input type="text" className="w-full" />
              </div>
              <div className="grid grid-cols-regForm gap-6 mt-5">
                <label className="text-right">Confirm Password</label>
                <input type="text" className="w-full" />
              </div>

              <div className="text-center mt-10">
                <button className="bg-blue-500 py-3 px-6 text-white">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StoreProfile;
