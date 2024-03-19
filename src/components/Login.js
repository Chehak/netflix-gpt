import React, { useRef, useState } from "react";
import Header from "./Header";
import { ValidateForm } from "../utils/Validate";
import { auth } from "../utils/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignIn, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const toogleSignInForm = () => {
    console.log("hhg");
    setIsSignInForm(!isSignIn);
  };

  const validate = () => {
    const message = ValidateForm(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
          console.log(errorCode + " " + errorMessage);
        });
    }
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
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-md"
        ></input>
        <button
          type="button"
          className="rounded-md p-2 my-2 w-full bg-red-700"
          onClick={validate}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-red-500 font-bold">{errorMessage}</p>
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
