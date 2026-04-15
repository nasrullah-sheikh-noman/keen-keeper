import React, { Suspense } from "react";
import Homepagetitle from "../../components/homepage/Homepagetitle";
import Yourfriendscount from "../../components/homepage/Yourfriendscount";
import Yourfriends from "../../components/homepage/Yourfriends";

const Home = () => {
  return (
    <div>
      <Homepagetitle />
      <Yourfriendscount />
      <div className="divider container w-[96%] mx-auto py-4 mt-11"></div>
      <Suspense
        fallback={
          <div className="flex justify-center items-center text-center text-9xl m-22">
            <span className="loading loading-dots loading-xl w-[8%]"></span>
          </div>
        }
      >
        <Yourfriends />
      </Suspense>
    </div>
  );
};

export default Home;
