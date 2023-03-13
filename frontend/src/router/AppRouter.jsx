import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRouter from "./PrivateRouter";
import KasaLogin from "../pages/KasaLogin";
import Kasa from "../pages/Kasa";
import Home from "../pages/Home";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="menu" element={<Home />} />
        <Route path="login" element={<KasaLogin />} />
        <Route path="kasa" element={<PrivateRouter />}>
          <Route path="" element={<Kasa />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
