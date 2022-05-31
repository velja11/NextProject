import type { NextPage } from 'next'
import Link from 'next/link';
import Card from '../components/card';


const Home: NextPage = () => {

  const itemi = [{title:"Test1", name:"Hello1"}, {title:"Test2", name:"Hello2"}, {title:"Test3", name:"Hello3"}, {title:"Test4", name:"Hello4"}, {title:"Test5", name:"Hello5"},{title:"Test6", name:"Hello6"},{title:"Test7", name:"Hello7"},{title:"Test8", name:"Hello8"}];

  return (
    <div>
      <div className='flex flex-col justify-center items-center flex-wrap md:flex-row'>
      {itemi.map((item) => {
       return <Card title={item.title} key={item.name} name={item.name} />
      })}
    </div>
    </div>
  )
}

export default Home
