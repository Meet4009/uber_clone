import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="h-screen w-full bg-no-repeat bg-contain bg-[url(https://plus.unsplash.com/premium_vector-1721722789631-84eed6cc72ef?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] pt-6 flex flex-col justify-between">
        {/* <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        /> */}
        <h1 className="text-3xl font-bold ml-6">Uber</h1>
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-3xl font-bold">Get Started with Uber</h2>
          <NavLink
            to="/login"
            className="flex justify-center items-center text-lg bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </NavLink>
        </div>
      </div>
    </div>
  );
};
