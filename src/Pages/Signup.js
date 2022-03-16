import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div>
      <div>
        <p>CUSTOMER REGISTRATION</p>
        <p>
          Customers have an easy access on different brands and products.
          Register now to add multiple brands in your cart and Get the Latest
          Trends!
        </p>
        <Link className="underline" to="/signup-customer">Sign up as Customer</Link>
      </div>
      <br />
      <div>
        <p>COMPANY REGISTRATION</p>
        <p>
          Entrepeneurs, sellers, companies are encouraged to sell products in
          Alt Wav as a platform to make it more easier upon selling out your
          products to the customers.
        </p>
        <Link className="underline" to="/signup-store">Sign up as Store</Link>
      </div>
    </div>
  );
}

export default Signup;
