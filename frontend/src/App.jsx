import { Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainDashboard from "./pages/CaptainDashboard";

import Home from "./pages/Home";
import UserProtectWarpper from "./pages/UserProtectedWarpper";
import CaptainProtectWrapper from "./pages/CaptainProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import CaptainLogout from "./pages/CaptainLogout";

function App() {
    return (
        <div>
            <Routes>
                {/* User Routes */}
                <Route path="/" element={<Start />} />
                <Route path="/login" element={<UserLogin />} />
                <Route path="/signup" element={<UserSignup />} />
                <Route
                    path="/home"
                    element={
                        <UserProtectWarpper>
                            <Home />
                        </UserProtectWarpper>
                    }
                />
                <Route
                    path="/users/logout"
                    element={
                        <UserProtectWarpper>
                            <UserLogout />
                        </UserProtectWarpper>
                    }
                />

                
                {/* Captain Routes */}
                <Route path="/captain-signup" element={<CaptainSignup />} />
                <Route path="/captain-login" element={<CaptainLogin />} />
                <Route
                    path="/captain-dashboard"
                    element={
                        <CaptainProtectWrapper>
                            <CaptainDashboard />
                        </CaptainProtectWrapper>
                    }
                />
                <Route
                    path="/captain/logout"
                    element={
                        <CaptainProtectWrapper>
                            <CaptainLogout />
                        </CaptainProtectWrapper>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
