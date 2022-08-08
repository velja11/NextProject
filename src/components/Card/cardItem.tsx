import React from "react";

const Card: React.FC<{ title: string; name: string }> = (props) => {
  return (
    <div className="flex flex-col  justify-center items-center	bg-white border-4 border-black mt-5 p-4 rounded-xl hover:bg-orange-600 hover:shadow-md hover:shadow-black hover:text-white transition easy-out duration-500 md:ml-4 md:w-2/12">
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <p className="mt-5">{props.name}</p>
    </div>
  );
};

export default Card;
