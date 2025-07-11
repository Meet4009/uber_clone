/* eslint-disable no-unused-vars */
import { useEffect, useState, useContext } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";
const UserLogin = () => {
    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        const timeNow = document.getElementById("timeNow");
        if (timeNow) {
            // Check if element exists
            timeNow.textContent = `${hours}:${minutes} ${ampm}`;
        }
    };
    setInterval(updateTime, 1000);

    const [lightOn, setLightOn] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setLightOn((prev) => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userData, setUserData] = useState({});

    const { user, setUser } = useContext(UserDataContext);
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            email: email,
            password: password,
        };

        const response = await axios.post(
            `${import.meta.env.VITE_BASE_URL}/users/login`,
            userData
        );
        console.log(response);

        if (response.status === 200) {
            const data = response.data;
            setUser(data.user);
            localStorage.setItem("token", data.token);
            navigate("/home");
        } else {
            alert("Failed to register, please try again.");
        }
        setEmail("");
        setPassword("");
    };

    return (
        <div className="bg-gray-700 flex items-center justify-center min-h-screen">
            <div className="relative w-[402px] h-[802px] bg-[#898580] rounded-[50px] shadow-2xl">
                <div className="absolute top-[11px] left-[11px] w-[380px] h-[780px] bg-white rounded-[40px] overflow-hidden">
                    {/* Status Bar  */}
                    <div className="relative w-full  bg-transparent">
                        {/*  Notch  */}
                        <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[120px] h-[36px] bg-black rounded-full">
                            <div className="absolute top-[10px] left-[12px] w-[50px] h-[15px] bg-gray-900 rounded-lg"></div>
                            <div
                                className={`absolute top-[15px] right-[40px] w-[5px] h-[5px] rounded-full ${
                                    lightOn ? "bg-green-500" : "bg-gray-950"
                                }`}
                            ></div>
                            <div className="absolute top-[10px] right-[12px] w-[15px] h-[15px] bg-gray-900 rounded-full"></div>
                        </div>

                        {/*  Time  */}
                        <div
                            className="absolute top-[16px] left-[35px] text-lg font-bold font-['Noto Sans']"
                            id="timeNow"
                        ></div>

                        {/*  Icons  */}
                        <div className="absolute top-[16px] right-[35px] flex items-center space-x-2">
                            <i className="fas fa-signal text-sm text-black"></i>
                            <i className="fas fa-wifi text-sm"></i>
                            <i className="fas fa-battery-full text-lg"></i>
                        </div>
                        <Link
                            to="/"
                            className="absolute top-[773px] left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full"
                        ></Link>
                    </div>

                    {/*  Content Section  */}

                    <div className=" h-[780px] w-full pt-[70px] px-5 flex flex-col justify-between">
                        <div>
                            <img
                                className=" w-[80px] mx-auto mb-10"
                                src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
                                alt=""
                            />
                            <form
                                action=""
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                <h3 className="text-lg mb-2 font-medium">
                                    What&apos;s Your Email
                                </h3>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    placeholder="Enter Your Email"
                                    className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base"
                                    required
                                />
                                <h3 className="text-lg mb-2 font-medium">
                                    What&apos;s Your Password
                                </h3>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                    placeholder="Enter Your Password"
                                    className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-lg placeholder:text-base"
                                    required
                                />
                                <button
                                    to="/login"
                                    className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mb-4 font-bold text-lg"
                                >
                                    Login
                                </button>
                                <p className="text-center">
                                    New Hear?{" "}
                                    <Link
                                        to="/signup"
                                        className="text-blue-500"
                                    >
                                        {" "}
                                        Create New Account
                                    </Link>
                                </p>
                            </form>
                        </div>
                        <div>
                            <Link
                                to="/captain-login"
                                className="flex items-center justify-center w-full bg-[#10b461] text-white py-3 rounded-3xl mb-4 font-bold text-lg"
                            >
                                Captian Sign in as Captian
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default UserLogin;
