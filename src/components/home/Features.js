import React from "react";

function Features() {
  return (
    <div className="features home-header py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl text-white">Features</h2>
          <p className="text-gray-300 w-4/12 mx-auto mt-10">
            We have so many features in this website that is new to people and
            makes the customer in awe. this are all the main features that
            seperates us from other.{" "}
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 text-white mx-auto w-4/5 mt-20">
          <div>
            <h3 className="mb-2 text-xl">
              <i className="text-yellow-400 fa fa-map-marker mr-2"></i>
              Works everywhere
            </h3>
            <p className="text-gray-300 text-sm">
              Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus.
              Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl">
              <i className="text-yellow-400 fa-regular fa-clock mr-2"></i>Always
              available
            </h3>
            <p className="text-gray-300 text-sm">
              Our application is always available for our customers making them
              happy for the rest of the day because they can use it anytime and
              anywhere.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl">
              {" "}
              <i className="text-yellow-400 fa fa-list-alt mr-2"></i>
              Customizable
            </h3>
            <p className="text-gray-300 text-sm">
              Website Customizable is the process of creating customized
              experiences for visitors to a website. Rather than providing a
              single, broad experience, website personalization allows companies
              to present visitors with unique experiences tailored to their
              needs and desires. Personalization is by no means a new concept.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl">
              <i className="text-yellow-400 fa fa-leaf mr-2"></i>Organic
            </h3>
            <p className="text-gray-300 text-sm">
              An organic website is a website that derives most of it's traffic
              organically. Organic traffic is traffic that comes to you by why
              of direct type-ins, natural search engine results and links coming
              in from other websites.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl">
              <i className="text-yellow-400 fa fa-plane mr-2"></i>Fast
            </h3>
            <p className="text-gray-300 text-sm">
              A fast phase app is where different kinds of customers and vendors
              are happy because they can navigate through our website with an
              ease.
            </p>
          </div>
          <div>
            <h3 className="mb-2 text-xl">
              <i className="text-yellow-400 fa fa-phone mr-2"></i>
              Mobile-first
            </h3>
            <p className="text-gray-300 text-sm">
              A “mobile-first” approach involves designing a desktop site
              starting with the mobile version, which is then adapted to larger
              screens (contrary to the traditional approach of starting with a
              desktop site and then adapting it to smaller screens)..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
