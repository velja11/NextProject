import Link from "next/link"
import { useRouter } from "next/router";
import React, { useState } from "react"

const Signup = () => {

    const [cbxAgree, setCxbAgree] = useState<boolean>(false);
    const router = useRouter();



    const onSubmitHandler = (event:React.SyntheticEvent) =>{
        event.preventDefault();

        if(cbxAgree !== true){
            return;
        }

        router.push("/login")

    }




    return (
        <div className="text-center mt-10 flex justify-center items-center mb-10">
            
        <form className="form bg-wheat-400 border-gray shadow-gray-300 bg-white rounded-3xl" onSubmit={onSubmitHandler}>
            <h1 className="mt-8 font-bold text-3xl">Sign up</h1>
            <p className="mt-3 text-md non-italic">Hey, let's fill the fields and create account</p>


            <div className="grid grid-cols-2 gap-4 w-[80%] mt-10">
                <input type="text" className="signupInp" placeholder="First name"/>
                <input type="text" className="signupInp" placeholder="Last name"/>
                <input type="text"  className="signupInp" placeholder="Country"/>
                <input type="tel"  className="signupInp" placeholder="Mobile"/>
            </div>
            
            <input placeholder="Email" type="email" className="input mt-4" ></input>
            <input placeholder="Password" type="password" className="input mt-4" ></input>

            <div className="flex justify-start items-center w-[80%] mt-8">
            <input type="checkbox" id="check" className="mb-5 desktop:mb-0" onChange={(e) => setCxbAgree(e.target.checked)} ></input>
            <p className="ml-1 text-sm desktop:ml-2">I agree with Terms of Conditions and Privacy Policies</p>
            </div>
            

            <button className="border border-gray bg-orange-300 px-4 py-2 font-bold box-border rounded-md mt-10 w-4/5">Create account</button>

            {/* <p className="mt-6">-- Or Sign in with --</p> */}

            {/* <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 gap-5 mt-5 mb-8 w-4/5">
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
            </div> */}

            <p className="mb-16 mt-10">Already have account?<Link href="/login"><span className="ml-1 font-bold cursor-pointer hover:underline">Log in</span></Link> </p>
            


        </form>
    </div>
    )

}

export default Signup