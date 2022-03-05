import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ErrorPage from "./Pages/ErrorPage";
import Signup from "./Pages/Signup";
import CustomerRegistration from "./Pages/CustomerRegistration";
import StoreRegistration from "./Pages/StoreRegistration";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/customer" element={<CustomerRegistration />} />
          <Route path="/signup/store" element={<StoreRegistration />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
