import React from "react";

function Team() {
  return (
    <div className="team bg-gray-100">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl text-center mb-10">Team</h1>
        <p className="w-4/12 mx-auto mt-10 text-center text-gray-700">
          We are AltWAV, a Philippine based company who is aspiring to be the
          next big ecommerce application and website. We are also four students
          of Far Eastern University Institute of Technology who is dreaming to
          become successful.
        </p>
        <div className="grid grid-cols-4 gap-7 mt-14 text-center">
          <div className="bg-white py-8 px-10">
            <img
              src="../images/wesley.jpg"
              className="w-44 h-44 rounded-full object-cover mx-auto"
            />
            <h1 className="mt-10 text-3xl font-semibold w-1/2 mx-auto">Wesley Candidato</h1>
            <p className="mt-5 text-gray-400 uppercase font-semibold">
              Project Manager
            </p>
            <p className="opacity-80 my-5">
              He is responsible for planning and overseeing projects to ensure
              they are completed in a timely fashion. He plan and designate
              project resources, prepare budgets, monitor progress and keep
              stakeholders informed the entire way.
            </p>
          </div>

          <div className="bg-white py-8 px-10">
            <img
              src="../images/aj.jpg"
              className="w-44 h-44 rounded-full object-cover mx-auto"
            />
            <h1 className="mt-10 text-3xl font-semibold">
              Albert Joseph Candelaria
            </h1>
            <p className="mt-5 text-gray-400 uppercase font-semibold">
              MAIN PROGRAMMER
            </p>
            <p className="opacity-80 my-5">
              He is duties will include managing systems performance,
              identifying and fixing defects, supporting data architecture,
              generating reports, developing in-house software, updating
              existing programs and he is also very handsome.
            </p>
          </div>

          <div className="bg-white py-8 px-10">
            <img
              src="../images/trix.jpg"
              className="w-44 h-44 rounded-full object-cover mx-auto"
            />
            <h1 className="mt-10 text-3xl font-semibold">
              Bianca Beatrix Quicho
            </h1>
            <p className="mt-5 text-gray-400 uppercase font-semibold">
              UI/UX DESIGNER
            </p>
            <p className="opacity-80 my-5">
              She's responsible for overall user satisfaction with a product.
              Her priority is to continually look for ways to improve the
              product experience, even for bestselling products that have been
              on the market for years.
            </p>
          </div>

          <div className="bg-white py-8 px-10">
            <img
              src="../images/vann.jpg"
              className="w-44 h-44 rounded-full object-cover mx-auto"
            />
            <h1 className="mt-10 text-3xl font-semibold">
              Vann Erycko Constantino
            </h1>
            <p className="mt-5 text-gray-400 uppercase font-semibold">
              DOCUMENTATION SPECIALIST
            </p>
            <p className="opacity-80 my-5">
              He is responsible for maintenance of company documents. His job is
              to store, catalogue and retrieve documents. ... He develop and
              maintain systems for document storage, and are responsible for
              document security and access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
