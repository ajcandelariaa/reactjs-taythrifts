import "./index.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import LoginProtectedRoute from "./routes/LoginProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/Signup";
import CustomerRegistration from "./pages/customer/CustomerRegistration";
import StoreRegistration from "./pages/store/StoreRegistration";
import Marketplace from "./pages/customer/Marketplace";
import CustomerProfile from "./pages/customer/CustomerProfile";
import CustomerTransactions from "./pages/customer/CustomerTransactions";
import CustomerCart from "./pages/customer/CustomerCart";
import Dashboard from "./pages/store/Dashboard";
import StoreProfile from "./pages/store/StoreProfile";
import StoreTransactions from "./pages/store/StoreTransactions";
import CustomerLayout from "./layouts/CustomerLayout";
import StoreLayout from "./layouts/StoreLayout";
import RegistrationLayout from "./layouts/RegistrationLayout";

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

          {/* CUSTOMER PAGES */}
          <Route element={<ProtectedRoutes accountType="customer" />}>
            <Route element={<CustomerLayout />}>
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/customer/profile/:username" element={<CustomerProfile />} />
              <Route path="/customer/transactions" element={<CustomerTransactions />}/>
              <Route path="/customer/cart" element={<CustomerCart />} />
            </Route>
          </Route>

          {/* STORE PAGES */}
          <Route element={<ProtectedRoutes accountType="store" />}>
            <Route element={<StoreLayout />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/store/profile/:username" element={<StoreProfile />} />
              <Route path="/store/transactions" element={<StoreTransactions />} />
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
