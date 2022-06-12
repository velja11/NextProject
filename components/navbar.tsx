import Link from "next/link";
import React from "react";
import { useAppSelector, useAppDispatch } from "../src/hooks";
import { userId } from "../src/features/loginSlice";
import { logout } from "../src/features/loginSlice";
import { useRouter } from "next/router";
import { logOut, auth } from "../features/firebase";

const Navbar:React.FC<{children:React.ReactNode}> = (props) => {

    const isLogUser = useAppSelector(userId)
    const dispatch = useAppDispatch()
    const router = useRouter()


    const logoutHandler = () => {

        logOut(auth).then(() => {
          dispatch(logout());
          router.push("/login");
        })

    }

    return (
        <div>
        <div className='flex bg-orange-300 items-center justify-between h-12 p-8'>
        {/* <nav>
          <ul className='flex justify-center p-4'>
            <li>Page 1</li>
            <li className='ml-6 '>Page 2</li>
            <li className='ml-6'>Page 3</li>
          </ul>
        </nav> */}
        <div className="ml-6">
        <Link href="/"><h1 className='logo'>Next project</h1></Link>
        </div>
        <main className='mr-6'>
         {!isLogUser && <div>
            <Link href="/login"><a className='bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-black hover:bg-orange-600 hover:text-white transition easy-in duration-500'>Login</a></Link>
            <Link href="/signup"><a className='ml-2 bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-black hover:bg-orange-600 hover:text-white transition easy-in duration-500'>Signup</a></Link>
            
          </div>}
          {isLogUser && <button className="bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-black hover:bg-orange-600 hover:text-white transition easy-in duration-500" onClick={logoutHandler}>Logout</button>}
        </main>
        </div>
        {props.children}
        </div>
    )

}

export default Navbar;