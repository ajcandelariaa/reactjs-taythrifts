import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Signup from "./Pages/Signup";
import CustomerRegistration from "./Pages/Customer/CustomerRegistration";
import StoreRegistration from "./Pages/Store/StoreRegistration";
import Marketplace from "./Pages/Customer/Marketplace";
import CustomerProfile from "./Pages/Customer/CustomerProfile";
import CustomerTransactions from "./Pages/Customer/CustomerTransactions";
import CustomerCart from "./Pages/Customer/CustomerCart";
import Dashboard from "./Pages/Store/Dashboard";
import StoreProfile from "./Pages/Store/StoreProfile";
import StoreTransactions from "./Pages/Store/StoreTransactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-customer" element={<CustomerRegistration />} />
          <Route path="/signup-store" element={<StoreRegistration />} />

          {/* CUSTOMER PAGES */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/customer/profile" element={<CustomerProfile />} />
          <Route path="/customer/transactions" element={<CustomerTransactions />} />
          <Route path="/customer/cart" element={<CustomerCart />} />

          {/* STORE PAGES */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/store/profile" element={<StoreProfile />} />
          <Route path="/store/transactions" element={<StoreTransactions />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
