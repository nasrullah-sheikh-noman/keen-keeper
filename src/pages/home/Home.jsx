import React from 'react';
import Homepagetitle from '../../components/homepage/Homepagetitle';
import Yourfriendscount from '../../components/homepage/Yourfriendscount';
import Yourfriends from '../../components/homepage/Yourfriends';

const Home = () => {
  return (
    <div>
      <Homepagetitle/>
      <Yourfriendscount/>
      <div className="divider container w-[96%] mx-auto py-4 mt-11"></div>
      <Yourfriends/>
    </div>
  );
};

export default Home;