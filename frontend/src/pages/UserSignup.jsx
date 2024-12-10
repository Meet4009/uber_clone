import { NavLink } from "react-router-dom";

export const UserSignUp = () => {
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <h1 className="text-3xl font-bold mb-10">Uber</h1>
        <form>
          <div className="flex justify-center items-center gap-2">
            <div>
              <h3 className="text-lg font-medium mb-2">First Name:</h3>
              <input
                className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-lg"
                type="text"
                required
                name="firstName"
                placeholder="firstName"
                autoComplete="off"
              />
            </div>

            <div>
              <h3 className="text-lg font-medium mb-2">Last Name:</h3>
              <input
                className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-lg"
                type="text"
                required
                name="lastName"
                placeholder="lastName"
                autoComplete="off"
              />
            </div>
          </div>

          <h3 className="text-lg font-medium mb-2">What&#39;s your email:</h3>
          <input
            className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-lg"
            type="email"
            required
            name="email"
            placeholder="email@example.com"
            autoComplete="off"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password:</h3>
          <input
            className="bg-[#eeeeee] rounded-lg px-4 py-2 mb-5 border-2 w-full text-base placeholder:text-lg"
            type="password"
            required
            name="password"
            placeholder="password"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-[#111] text-white font-semibold rounded-lg px-4 py-2 mb-2 w-full text-lg placeholder:text-xl"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center">
          I have already account?
          <NavLink to="/login" className="text-blue-600 ml-1">
            Click Here
          </NavLink>
        </p>
      </div>

      <div>
        <NavLink
          to="/captain-login"
          className="bg-[#b47821] text-white font-semibold rounded-lg flex justify-center items-center px-4 py-2 mb-3 text-lg placeholder:text-xl"
        >
          Sign in as Captain
        </NavLink>
      </div>
    </div>
  );
};