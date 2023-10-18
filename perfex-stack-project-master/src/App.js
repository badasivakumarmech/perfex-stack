import "./App.css";
import { Routes, Route } from "react-router-dom";
import UserLogin from "./Perfex-login";
import ForgotPassword from "./Forgetpassword";
import PerfexHome from "./PerfexHome";
import AdminDashboard from "./AdminDashboard";
import Admin from "./Practice";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<UserLogin />} />
        <Route exact path="/ForgotPassword" element={<ForgotPassword />} />
        <Route exact path="/PerfexHome" element={<PerfexHome />} />
        <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        <Route exact path="/Admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
