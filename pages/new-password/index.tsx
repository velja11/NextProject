import Link from "next/link";
import React, { useRef } from "react";
import { auth, passwordReset } from "../../features/firebase";
import { useRouter } from "next/router";
import { resetPassNot, deletePassErr, setResetPassErr, setPassReset } from "../../src/features/loginSlice";
import { useAppSelector, useAppDispatch } from "../../src/hooks";


const IndexPage = () => {


    const emailRef = useRef<HTMLInputElement>(null);
    //const passRef = useRef<HTMLInputElement>(null);

    const dispatch = useAppDispatch();

    const router = useRouter();

    const resetPassErrNot = useAppSelector(resetPassNot);

    const resetPasswordHandler = (e:React.FormEvent) => {
        e.preventDefault();

        const email = emailRef.current!.value;
        //const newPass = passRef.current?.value;

        passwordReset(auth, email).then(() => {
            dispatch(setPassReset("Check email for further informations!"));
            router.push("/login");

        }).catch((err) => {
            dispatch(setResetPassErr(err.message));

        })

        //somethin will happen
    }

    const deleteResetErrNot = () => {
        dispatch(deletePassErr());
    }


    return (
        <div className="flex flex-col justify-center items-center mt-10">
            {resetPassErrNot && <div className="w-[28%] bg-red-400 p-2 rounded-xl flex justify-between items-center">
            
            <div className="font-bold ml-2">{resetPassErrNot}</div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black cursor-pointer hover:scale-125 mr-2" onClick={deleteResetErrNot} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
             </svg>
            </div>}
            <form className="form bg-wheat-400 border-gray shadow-gray-300 bg-white rounded-3xl" onSubmit={resetPasswordHandler}>
                <h1 className="mt-4 font-bold text-2xl">Reset password</h1>

                <input placeholder="Email" type="email" className="input mt-10" ref={emailRef}></input>
                {/* <input placeholder="New password" type="string" required className="input mt-2" ref={passRef}></input> */}

                <button className="border border-gray bg-orange-300 px-4 py-2 font-bold box-border rounded-md mt-10 mb-4 w-4/5">Reset password</button>
                <Link href="/login"><span className="underline cursor-pointer mb-10">Back to login page</span></Link>

            </form>
        </div>
    )
}

export default IndexPage;