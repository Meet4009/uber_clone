import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const CaptainLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    setFormData({ email: "", password: "" });
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-10 flex items-center gap-2">
          Uber <FaArrowRightLong />
        </h1>
        <form onSubmit={handleFormSubmit}>
          <h3 className="text-lg font-medium mb-2">What&#39;s your email:</h3>
          <input
            className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-7 border-2 w-full text-base placeholder:text-lg"
            type="email"
            required
            name="email"
            placeholder="email@example.com"
            autoComplete="off"
            value={formData.email}
            onChange={handleInputChange}
          />
          <h3 className="text-lg font-medium mb-2">Enter Password:</h3>
          <input
            className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-7 border-2 w-full text-base placeholder:text-lg"
            type="password"
            required
            name="password"
            placeholder="password"
            autoComplete="off"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 mb-2 w-full text-lg placeholder:text-xl"
          >
            Login
          </button>
        </form>

        <p className="text-center">
          You want to create a driver account on the Uber app.
          <NavLink to="/captain-signup" className="text-blue-600 ml-1">
            Register as a Captain
          </NavLink>
        </p>
      </div>

      <div>
        <NavLink
          to="/login"
          className="bg-[#c74724] text-white font-semibold rounded-lg flex justify-center items-center px-4 py-2 mb-3 text-lg placeholder:text-xl"
        >
          Sign in as User
        </NavLink>
      </div>
    </div>
  );
};