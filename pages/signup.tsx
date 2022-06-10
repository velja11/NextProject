import Link from "next/link"
import { useRouter } from "next/router";
import React, { useRef, useState } from "react"
import { auth, createUser } from "../features/firebase";
import { useAppDispatch, useAppSelector } from "../src/hooks";
import {createNewUsr, setSignUpError, errorSignUpNots, deleteSignUpNotification} from '../src/features/loginSlice'

const Signup = () => {

    const [cbxAgree, setCxbAgree] = useState<boolean>(false);
    const router = useRouter();

    const refEmail = useRef<HTMLInputElement>(null);
    const refPass = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();


    const errorSignUpNotif = useAppSelector(errorSignUpNots);



    const onSubmitHandler = (event:React.SyntheticEvent) =>{
        event.preventDefault();

        const email = refEmail.current!.value;
        const password = refPass.current!.value;

        if(cbxAgree !== true){
            return;
        }else{

        createUser(auth, email , password).then((cred) => {
            console.log("User:", cred.user);
            dispatch(createNewUsr());
            router.push("/login");

        }).catch(err => {
            dispatch(setSignUpError(err.message))
           
            }
        
        );
        }

    }

    const deleteSignUpError = () => {
        dispatch(deleteSignUpNotification())

    }




    return (
        <div className="text-center mt-10 flex flex-col justify-center items-center mb-10">

         {errorSignUpNotif && <div className="w-[28%] bg-red-400 p-2 rounded-xl flex justify-between items-center">
            
            <div className="font-bold ml-2">{errorSignUpNotif}</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black cursor-pointer hover:scale-125 mr-2" onClick={deleteSignUpError} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
             </svg>
            </div>}
            
        <form className="form bg-wheat-400 border-gray shadow-gray-300 bg-white rounded-3xl" onSubmit={onSubmitHandler}>
            <h1 className="mt-8 font-bold text-3xl">Sign up</h1>
            <p className="mt-3 text-md non-italic">Hey, let's fill the fields and create account</p>


            <div className="grid grid-cols-2 gap-4 w-[80%] mt-10">
                <input type="text" className="signupInp" placeholder="First name"/>
                <input type="text" className="signupInp" placeholder="Last name"/>
                <input type="text"  className="signupInp" placeholder="Country"/>
                <input type="tel"  className="signupInp" placeholder="Mobile"/>
            </div>
            
            <input placeholder="Email" type="email" className="input mt-4" ref={refEmail} ></input>
            <input placeholder="Password" type="password" className="input mt-4" ref={refPass} ></input>

            <div className="flex justify-start items-center w-[80%] mt-8">
            <input type="checkbox" id="check" className="mb-5 desktop:mb-0" onChange={(e) => setCxbAgree(e.target.checked)} ></input>
            <p className="ml-1 text-sm desktop:ml-2">I agree with Terms of Conditions and Privacy Policies</p>
            </div>
            

            <button className="border border-gray bg-orange-300 px-4 py-2 font-bold box-border rounded-md mt-10 w-4/5">Create account</button>

            <p className="mb-16 mt-10">Already have account?<Link href="/login"><span className="ml-1 font-bold cursor-pointer hover:underline">Log in</span></Link> </p>
            


        </form>
    </div>
    )

}

export default Signup