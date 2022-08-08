import React from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/loginForm";
import { useAppDispatch } from "../hooks";
import { login, setSignInError } from "../features/loginSlice";
import { signIn, auth } from "../featuresFirebase/firebase";

const Login = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const testHandler = (userEmail: string, userPassword: string) => {
    if (userEmail.trim() == "" || userPassword.trim() == "") {
      return;
    } else {
      console.log(userEmail, userPassword);

      signIn(auth, userEmail, userPassword)
        .then((cred) => {
          console.log("User cred", cred.user.uid);
          dispatch(login(cred.user.uid));
          router.push("/");
        })
        .catch((err) => dispatch(setSignInError(err.message)));
    }
  };

  return <LoginForm onAddHandler={testHandler} />;
};

export default Login;
