import React, { use } from "react";
import Friend from "./Friend";

const friendsPromise = fetch("/data.json").then((res) => res.json());

const Yourfriends = () => {
  const friends = use(friendsPromise);
  console.log("friends", friends);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Your Friends</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-4">
        {friends.map((friend) => (
          <Friend key={friend.data} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default Yourfriends;
