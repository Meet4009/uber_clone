/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainProtectWrapper = ({ children }) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        if (!token) {
            navigate("/captain-login");
        }
    });

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    .then((response) => {
        if (response.status === 200) {
            setCaptain(response.data.captain);
        }
    })
    .catch((error) => {
        console.error("Error fetching captain profile:", error);
        localStorage.removeItem("token");
        navigate("/captain-login");
    })
    .finally(() => {
        setIsLoading(false);
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return <>{children}</>;
};

export default CaptainProtectWrapper;
