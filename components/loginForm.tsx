import Link from "next/link"
import React, { useRef } from "react"

const img1 = <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
const img2 = <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
const img3 = <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>



const LoginForm:React.FC<{onAddHandler:(text:string | undefined, text2: string | undefined) => void}> = (props) => {

    const userRef = useRef<HTMLInputElement>(null);
    const passRef = useRef<HTMLInputElement>(null);


    const submitHandler = (event:React.SyntheticEvent) => {
        event.preventDefault();

        const ref1value = userRef.current?.value;
        const ref2value = passRef.current?.value;

        props.onAddHandler(ref1value, ref2value);


    }

    return (
        <div className="text-center mt-10 flex justify-center items-center mb-10">
            
            <form className="form bg-wheat-400 border-gray shadow-gray-300 bg-white rounded-3xl" onSubmit={submitHandler}>
                <h1 className="mt-8 font-bold text-3xl">Login</h1>
                <p className="mt-3 text-md non-italic">Hey, enter your details to sign in<br /> to your account</p>
                
                <input placeholder="Enter email" type="email" className="input mt-10" ref={userRef}></input>
                <input placeholder="Password" type="password" className="input mt-2" ref={passRef}></input>
                
    
                <button className="border border-gray bg-orange-300 px-4 py-2 font-bold box-border rounded-md mt-16 w-4/5">Sign in</button>
    
                <p className="mt-6">-- Or Sign in with --</p>
    
                <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 mt-5 mb-8 w-4/5">
                    <button className="buttonLogo border-gray w-full">
                    {img1}
                    <span className="text-sm ml-2">Google</span>
                   </button>
                    <button className="buttonLogo w-full border-gray">
                    {img2}
                    <span className="text-sm ml-2">Apple ID</span>
                    </button>
                    <button className="buttonLogo border-gray w-full">
                    {img3}
                    <span className="text-sm ml-2">Facebook</span>
                    </button>
                </div>
    
                <p className="mb-16">Don't have account?<Link href="/signup"><span className="ml-1 font-bold cursor-pointer hover:underline">Create now</span></Link> </p>
                
    
    
            </form>
        </div>
    )

}

export default LoginForm