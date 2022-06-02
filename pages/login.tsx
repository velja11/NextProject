import React from "react";
import { useRouter } from "next/router";
import LoginForm from "../components/loginForm";


const Login = () => {

    const router = useRouter();

    const testHandler = (text:string | undefined, text2: string | undefined) => {

        if(text?.trim().length == 0 || text2?.trim().length == 0){
            return;
        }

        console.log(text, text2);

        router.push("/")

    }

    

    return (
        <LoginForm onAddHandler={testHandler}/>

    )
}

export default Login;

