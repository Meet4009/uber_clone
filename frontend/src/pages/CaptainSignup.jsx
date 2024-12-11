import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export const CaptainSignUp = () => {
  const [captainSignupData, setCaptainSignupData] = useState({
    fullName: {
      firstName: "",
      lastName: "",
    },
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCaptainSignupData((prev) => {
      if (name === "firstName" || name === "lastName") {
        return {
          ...prev,
          fullName: {
            ...prev.fullName,
            [name]: value,
          },
        };
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("CaptainSignup:", captainSignupData);

    setCaptainSignupData({
      fullName: {
        firstName: "",
        lastName: "",
      },
      email: "",
      password: "",
    });
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-10 flex items-center gap-2">
          Uber <FaArrowRightLong />
        </h1>
        <form onSubmit={handleFormSubmit}>
          <div className="flex justify-center items-center gap-2">
            <div>
              <h3 className="text-lg font-medium mb-1">First Name:</h3>
              <input
                className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-base"
                type="text"
                required
                name="firstName"
                placeholder="firstName"
                autoComplete="off"
                value={captainSignupData.fullName.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-1">Last Name:</h3>
              <input
                className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-base"
                type="text"
                required
                name="lastName"
                placeholder="lastName"
                autoComplete="off"
                value={captainSignupData.fullName.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <h3 className="text-lg font-medium mb-1">
            What&#39;s our Captain&#39;s email:
          </h3>
          <input
            className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-base"
            type="email"
            required
            name="email"
            placeholder="email@example.com"
            autoComplete="off"
            value={captainSignupData.email}
            onChange={handleInputChange}
          />
          <h3 className="text-lg font-medium mb-1">Enter Password:</h3>
          <input
            className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-base"
            type="password"
            required
            name="password"
            placeholder="password"
            autoComplete="off"
            value={captainSignupData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 mb-2 w-full text-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center">
          I have already account as a captain?
          <NavLink to="/captain-login" className="text-blue-600 ml-1">
            Click Here
          </NavLink>
        </p>
      </div>

      <div>
        <p className="text-xs leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS message,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};
