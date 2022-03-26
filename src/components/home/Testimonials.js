import React from "react";

function Testimonials() {
  return (
    <div className="testimonials bg-white">
      <div className="container mx-auto py-14">
        <h1 className="text-4xl text-center mb-10">Testimonials</h1>
        <p className="w-4/12 mx-auto mt-10 text-center text-gray-700">
          Our customers love us! Read what they have to say below. This
          customers came from different company and they are all also a
          promising people.
        </p>

        <div className="grid grid-cols-3 gap-6 mt-14">
          <div>
            <div className="testimonials-box pt-10 pb-5 px-10 bg-gray-100">
              <p className="text-gray-700">
                In my opinion this will be the next big thing in ecommerce
                world. Everything looks great, come to think of it they're only
                a rookie in this league.
              </p>
            </div>
            <div className="flex mt-5 ml-7 gap-2">
              <img
                src="../images/kaizen.jpg"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="self-center">
                <p className="font-bold">John Karl Neri</p>
                <p className="opacity-70 text-xs">
                  CEO of Kaizen University Inc.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="testimonials-box pt-10 pb-5 px-10 bg-gray-100">
              <p className="text-gray-700">
                The team did a good job on creating this website. everything
                looks professiona. I know they will make it one day.
              </p>
            </div>
            <div className="flex mt-5 ml-7 gap-2">
              <img
                src="../images/jl.jpg"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="self-center">
                <p className="font-bold">John Liouelle Delagdon</p>
                <p className="opacity-70 text-xs">Founder of Swag Co.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="testimonials-box pt-10 pb-5 px-10 bg-gray-100">
              <p className="text-gray-700">
                Kudos to this group for making something out of nothing. I hope
                one day that they'll have their own headquarters so I can visit
                them and Invest .
              </p>
            </div>
            <div className="flex mt-5 ml-7 gap-2">
              <img
                src="../images/migs.jpg"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="self-center">
                <p className="font-bold">Miguel Bryan Pajarillo</p>
                <p className="opacity-70 text-xs">
                  Owner of LOL of Legends Ltd.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
