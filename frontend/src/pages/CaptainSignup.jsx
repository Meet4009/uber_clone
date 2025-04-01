import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
    // const timeNow = document.getElementById("timeNow");

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

    // Toggle the light color every 1 second
    useEffect(() => {
        const interval = setInterval(() => {
            setLightOn((prev) => !prev);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData, setUserData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({
            fullname: {
                firstname: firstname,
                lastname: lastname,
            },
            email: email,
            password: password,
        });
        console.log(userData);
        setEmail("");
        setPassword("");
        setFirstName("");
        setLastName("");
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
                        <Link to="/" className="absolute top-[773px] left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full"></Link>
                    </div>

                    {/*  Content Section  */}

                    <div className=" h-[780px] w-full pt-[70px] px-5 flex flex-col justify-between">
                        <div>
                            <img
                                className=" w-[100px] mx-auto mb-2"
                                src="/uber-driver.png"
                                alt=""
                            />
                            <form
                                action=""
                                onSubmit={(e) => {
                                    handleSubmit(e);
                                }}
                            >
                                <h3 className="text-base mb-2 font-medium">
                                    What&apos;s our Captian&apos;s Name
                                </h3>
                                <div className="flex gap-3 mb-5">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm"
                                        required
                                        value={firstname}
                                        onChange={(e) => {
                                            setFirstName(e.target.value);
                                        }}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="bg-[#eeeeee]  w-1/2 rounded px-4 py-2  border text-base placeholder:text-sm"
                                        required
                                        value={lastname}
                                        onChange={(e) => {
                                            setLastName(e.target.value);
                                        }}
                                    />
                                </div>
                                <h3 className="text-base mb-2 font-medium">
                                    What&apos;s our Captian&apos;s  Email
                                </h3>
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-base placeholder:text-sm"
                                    required
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <h3 className="text-base mb-2 font-medium">
                                    What&apos;s Your Password
                                </h3>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="bg-[#eeeeee] rounded px-4 py-2 mb-5 border w-full text-base placeholder:text-sm"
                                    required
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                                <button
                                    to="/login"
                                    className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mb-4 font-bold text-lg"
                                >
                                    Register
                                </button>
                                <p className="text-center">
                                    Alread have a Account ?{" "}
                                    <Link to="/captain-login" className="text-blue-500">
                                        Login
                                    </Link>
                                </p>
                            </form>
                        </div>
                        <div>
                            <p className="text-[12px] mb-10 leading-tight">
                                This site is protected by reCAPTCHA and the
                                <span className="underline"> Google Privacy Policy </span>and<span className="underline"> Terms of Service
                                apply</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CaptainSignup;
