import React from "react";
import { Link, NavLink } from "react-router";

const Friend = ({ friend }) => {
  return (
    <Link
    to={`/frienddetails/${friend.id}`}
     className="border my-4 mx-1 border-gray-300 shadow-cyan-400 shadow-lg hover:scale-105  hover:shadow-2xl transition transform duration-300 px-6 py-8 flex flex-col items-center text-center space-y-3 rounded-lg">
      <img className="rounded-full mx-auto" src={friend.avatar} alt="" />
      <h2 className="text-2xl font-semibold">{friend.name}</h2>
      <h3 className="text-gray-500 text-base">
        {friend.stats.daysSinceContact}d ago
      </h3>
      <h4 className="bg-cyan-400 rounded-full mx-auto px-3 py-1.5 font-semibold text-base w-fit">
        {friend.tag}
      </h4>
      <h4 className="bg-red-400 rounded-full mx-auto px-3 py-1.5 font-semibold text-base w-fit">
        {friend.status}
      </h4>
    </Link>
  );
};

export default Friend;
