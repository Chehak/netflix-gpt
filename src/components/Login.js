import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true);
  const toogleSignInForm = () => {
    console.log("hhg");
    setIsSignInForm(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" />
      </div>
      <form className="text-white bg-opacity-75 absolute my-36 bg-black w-3/12 mx-auto right-0 left-0 py-6 px-8">
        <h1 className="font-bold text-3xl my-2">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-md"
          ></input>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        ></input>
        <button type="button" className="rounded-md p-2 my-2 w-full bg-red-700">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="font-bold py-4 my-2 text-sm cursor-pointer"
          onClick={toogleSignInForm}
        >
          {isSignIn ? "New to Netflix? Sign up now" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
