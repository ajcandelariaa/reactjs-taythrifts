import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="grid grid-cols-2 w-3/4 mx-auto mt-10 gap-10">
      <div
        class="text-center hovereffect"
        style={{ backgroundColor: `#000000;` }}
      >
        <img className="" src="../images/customer.jpg" />
        <div className="overlay">
          <h2>
            Customer Registration
            <br />
          </h2>
          <p>
            Customers have an easy access on different brands and products.
            Register now to add multiple brands in your cart and Get the Latest
            Trends!
          </p>
          <p>
            <Link className="hover:underline" to="/signup-customer">
              Sign up as Customer <i className="fas fa-chevron-right"></i>
            </Link>
          </p>
        </div>
      </div>

      <div
        class="text-center hovereffect"
        style={{ backgroundColor: `#000000;` }}
      >
        <img className="" src="../images/company.jpg" />
        <div className="overlay">
          <h2>
            Store Registration
            <br />
          </h2>
          <p>
            Entrepeneurs, sellers, companies are encouraged to sell products in
            Alt Wav as a platform to make it more easier upon selling out your
            products to the customers.
          </p>
          <p>
            <Link className="hover:underline" to="/signup-store">
              Sign up as Store <i className="fas fa-chevron-right"></i>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
