import React from 'react';
import Homepagetitle from '../../components/homepage/Homepagetitle';
import Yourfriendscount from '../../components/homepage/Yourfriendscount';
import Yourfriends from '../../components/homepage/Yourfriends';

const Home = () => {
  return (
    <div>
      <Homepagetitle/>
      <Yourfriendscount/>
      <Yourfriends/>
    </div>
  );
};

export default Home;