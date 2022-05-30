import type { NextPage } from 'next'
import Card from '../components/card';


const Home: NextPage = () => {

  const itemi = [{title:"Test1", name:"Hello1"}, {title:"Test2", name:"Hello2"}, {title:"Test3", name:"Hello3"}, {title:"Test4", name:"Hello4"}, {title:"Test5", name:"Hello5"},{title:"Test6", name:"Hello6"},{title:"Test7", name:"Hello7"},{title:"Test8", name:"Hello8"}];

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
      <h1 className='ml-4 font-bold lowercase text-3xl md:uppercase'>Next project</h1>
      <main className='mr-6'>
        <div>
          <a className='bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-blue-800 hover:bg-blue-400 hover:text-white transition easy-in duration-500'>Login</a>
          <a className='ml-2 bg-white rounded-md pl-4 pt-1 pb-1 pr-4 border-2 border-blue-800 hover:bg-blue-400 hover:text-white transition easy-in duration-500'>Signup</a>
        </div>
      </main>
      </div>
    <div className='flex flex-col justify-center items-center flex-wrap md:flex-row'>
      {/* <div className='flex flex-col justify-center items-center bg-white border-4 border-blue-400 w-64 mt-5 p-4 rounded-xl hover:bg-blue-300 hover:text-white transition easy-out duration-500 '>
      <h1 className="text-5xl font-bold underline">Hello</h1>
      <p className='mt-5'>Test</p> 
      </div>
      <div className='flex flex-col justify-center items-center bg-white border-4 border-blue-400 w-64 mt-5 p-4 rounded-xl hover:bg-blue-300 hover:text-white transition easy-out duration-500 md:ml-4'>
      <h1 className="text-5xl font-bold underline">Hello 2</h1>
      <p className='mt-5'>Test 2</p> 
      </div> */}
      {itemi.map((item) => {
       return <Card title={item.title} key={item.name} name={item.name} />
      })}
    </div>
    </div>
  )
}

export default Home
