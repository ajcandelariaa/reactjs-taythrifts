import React from "react";

function Footer() {
  return (
    <div className="bg-footerBg py-10">
      <div className="container m-auto">
        <div className=" grid grid-cols-footerGrid text-gray-400 text-sm">
          <div>
            <p className="text-white mb-2 text-base font-bold">Services</p>
            <p>Web design</p>
            <p>Development</p>
            <p>Hosting</p>
          </div>

          <div>
            <p className="text-white mb-2 text-base font-bold">About</p>
            <p>Company</p>
            <p>Team</p>
            <p>Careers</p>
          </div>

          <div>
            <p className="text-white mb-2 text-base font-bold">TayThrifts</p>
            <p>
              Alt WAV, the new upcoming online shopping site, has made several
              shifts in the e-commerce business in the Philippines, creating an
              avenue for sellers to promote their items online, and to give
              Filipinos new ways to discover and buy the best options for
              themselves. With one month of quality service through their
              website and mobile app, its constantly growing the inventory of
              items, and offering convenient payment options, the true
              effortless shopping experience begins once again through Alt WAV’s
              new platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-4 text-white text-center w-60 mx-auto mt-12">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-snapchat"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>

        <div className="text-center text-gray-500 text-sm mt-10">
            <p class="copyright">TayThrifts © 2021</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
