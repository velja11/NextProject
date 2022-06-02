import React, { useRef } from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/loginform";


const Login = () => {

    const router = useRouter();

    const submitHandler = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        router.push("/");

    }

    return (
        <LoginForm onSubmitHandler={submitHandler}/>

    )
}

export default Login;

