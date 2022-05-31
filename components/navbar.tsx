import Link from "next/link";
import React from "react";

const Navbar:React.FC<{children:React.ReactNode}> = (props) => {
    return (
        <div>
        <div className='flex bg-blue-200 items-center justify-between h-12 p-8'>
        {/* <nav>
          <ul className='flex justify-center p-4'>
            <li>Page 1</li>
            <li className='ml-6 '>Page 2</li>
            <li className='ml-6'>Page 3</li>
          </ul>
        </nav> */}
        <Link href="/"><h1 className='logo'>Next project</h1></Link>
        <main className='mr-6'>
          <div>
            <Link href="/login"><a className='bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-blue-800 hover:bg-blue-400 hover:text-white transition easy-in duration-500'>Login</a></Link>
            <Link href="/signup"><a className='ml-2 bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-blue-800 hover:bg-blue-400 hover:text-white transition easy-in duration-500'>Signup</a></Link>
            
          </div>
        </main>
        </div>
        {props.children}
        </div>
    )

}

export default Navbar;