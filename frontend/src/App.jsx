import { Route, Routes } from "react-router-dom";
import { UserLogin } from "./pages/UserLogin";
import { Home } from "./pages/Home";
import { UserSignUp } from "./pages/UserSignup";
import { CaptainLogin } from "./pages/CaptainLogin";
import { CaptainSignUp } from "./pages/CaptainSignup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/signup" element={<UserSignUp />} />
      <Route path="/captain-login" element={<CaptainLogin />} />
      <Route path="/captain-signup" element={<CaptainSignUp />} />
    </Routes>
  );
};
export default App;
