import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {

    const router = useRouter();

    const submitHandler = (event:React.SyntheticEvent) => {
        event.preventDefault();

        router.push("/");

        
    }


    return (
    <div className="text-center mt-10 flex justify-center items-center">
        
        <form className="mt-3 flex flex-col justify-start items-center bg-wheat-400 border border-gray w-1/4 h-3/4 rounded-xl shadow-sm shadow-gray-300" onSubmit={submitHandler}>
            <h1 className="mt-8 font-bold text-3xl">Login</h1>
            <p className="mt-3 text-md non-italic">Hey, enter your details to sign in<br /> to your account</p>
            
            <input placeholder="Enter email" className="border px-4 py-2 box-border rounded-md mt-10 w-4/5"></input>
            <input placeholder="Password" className="border border-gray px-4 py-2 mt-2 box-border rounded-md w-4/5"></input>
            

            <button className="border border-gray bg-orange-300 px-4 py-2 box-border rounded-md mt-16 w-4/5">Sign in</button>

            <p className="mt-6">-- Or Sign in with --</p>

            <div className="flex flex-row justify-between mt-5 mb-8 w-4/5">
                <button className="border border-gray px-3 py-1 rounded-md w-3/12">Google</button>
                <button className="border border-gray px-3 py-1 rounded-md w-3/12">Apple</button>
                <button className="border border-gray px-3 py-1 rounded-md w-3/12">Facebook</button>
            </div>

            <p className="mb-5">Don't have account?<Link href="/signup"><span className="ml-1 font-bold cursor-pointer">Create now</span></Link> </p>
            


        </form>
    </div>
    )
}

export default Login;