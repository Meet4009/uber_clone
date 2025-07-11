/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { user, setUser } = useContext(UserDataContext);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    });

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        if (response.status === 200) {
            setUser(response.data.user);
        }
    })
    .catch((error) => {
        console.error("Error fetching user profile:", error);
        localStorage.removeItem("token");
        navigate("/login");
    })
    .finally(() => {
        setIsLoading(false);
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default UserProtectWrapper;

