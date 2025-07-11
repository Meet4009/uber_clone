import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutCaptain = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/captain-login");
                return;
            }

            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/captain/logout`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                localStorage.removeItem("token");
                await navigate("/captain-login");
                return;
            }
        };

        logoutCaptain();
    }, [navigate]);

    return null; // or a loading spinner if desired
};

export default CaptainLogout;
