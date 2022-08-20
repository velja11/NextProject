import type { NextPage } from "next";
import Link from "next/link";
import Card from "../components/Card/cardItem";
import { userId } from "../features/loginSlice";
import { useAppSelector } from "../hooks";

interface Item {
  title: string;
  name: string;
}

const Home: React.FC<{ items: Item[] }> = ({ items }) => {
  const userlogin = useAppSelector(userId);

  return (
    <div>
      {userlogin && (
        <div className="flex flex-col justify-center items-center flex-wrap md:flex-row">
          {items.map((item) => {
            return <Card title={item.title} key={item.name} name={item.name} />;
          })}
        </div>
      )}
      {!userlogin && (
        <p className="text-center text-xl font-bold mt-6">
          You must{" "}
          <Link href="/login">
            <span className="underline text-orange-400 cursor-pointer">
              log in
            </span>
          </Link>
        </p>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const items = [
    { title: "Test1", name: "Hello1" },
    { title: "Test2", name: "Hello2" },
    { title: "Test3", name: "Hello3" },
    { title: "Test4", name: "Hello4" },
    { title: "Test5", name: "Hello5" },
    { title: "Test6", name: "Hello6" },
    { title: "Test7", name: "Hello7" },
    { title: "Test8", name: "Hello8" },
  ];

  return {
    props: {
      items,
    },
  };
}

export default Home;
