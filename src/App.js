import "./index.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginProtectedRoute from "./LoginProtectedRoute";
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
import CustomerLayout from "./Layout/CustomerLayout";
import StoreLayout from "./Layout/StoreLayout";
import RegistrationLayout from "./Layout/RegistrationLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<LoginProtectedRoute accountType="store" />}>
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<RegistrationLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup-customer" element={<CustomerRegistration />} />
            <Route path="/signup-store" element={<StoreRegistration />} />
          </Route>

          <Route element={<ProtectedRoutes accountType="customer" />}>
            {/* CUSTOMER PAGES */}
            <Route element={<CustomerLayout />}>
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/customer/profile" element={<CustomerProfile />} />
              <Route
                path="/customer/transactions"
                element={<CustomerTransactions />}
              />
              <Route path="/customer/cart" element={<CustomerCart />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoutes accountType="store" />}>
            {/* STORE PAGES */}
            <Route element={<StoreLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/store/profile" element={<StoreProfile />} />
              <Route
                path="/store/transactions"
                element={<StoreTransactions />}
              />
            </Route>
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
