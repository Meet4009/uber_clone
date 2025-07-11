import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            const response = await axios.get(
                `${import.meta.env.VITE_BASE_URL}/users/logout`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200) {
                localStorage.removeItem("token");
                await navigate("/login");
                return;
            }
        };

        logoutUser();
    }, [navigate]);

    return null; // or a loading spinner if desired
};

export default UserLogout;
