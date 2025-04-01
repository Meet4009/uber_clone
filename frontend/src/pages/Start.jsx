import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Start = () => {
    const [lightOn, setLightOn] = useState(false);
    const [currentTime, setCurrentTime] = useState('');

    const updateTime = () => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${hours}:${minutes} ${ampm}`;
    };

    useEffect(() => {
        setCurrentTime(updateTime()); // Initial time
        const timeInterval = setInterval(() => {
            setCurrentTime(updateTime());
        }, 1000);

        const lightInterval = setInterval(() => {
            setLightOn((prev) => !prev);
        }, 1000);

        return () => {
            clearInterval(timeInterval);
            clearInterval(lightInterval);
        };
    }, []);
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
                        >{
                            currentTime
                        }</div>
                        

                        {/*  Icons  */}
                        <div className="absolute top-[16px] right-[35px] flex items-center space-x-2">
                            <i className="fas fa-signal text-sm text-black"></i>
                            <i className="fas fa-wifi text-sm"></i>
                            <i className="fas fa-battery-full text-lg"></i>
                        </div>
                        {/*  Navigation  */}
                        <Link to="/home" className="absolute top-[773px] left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-black rounded-full"></Link>
                    </div>

                    {/*  Content Section  */}
                    <div>
                        <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1515543582370-4cff31e54e8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-[780px] w-full pt-[70px] flex justify-between flex-col">
                            <img
                                className=" w-[80px] mx-auto "
                                src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
                                alt=""
                            />
                            <div className="bg-transparent py-4 px-4">
                                <h2 className="text-[25px] font-bold text-center text-[#c4c4c4]">
                                    Get Started With Uber
                                </h2>
                                <Link
                                    to="/login"
                                    className="flex items-center justify-center w-full bg-white text-black py-3 rounded-3xl mt-7 font-bold text-lg"
                                >
                                    Continue
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Start;
