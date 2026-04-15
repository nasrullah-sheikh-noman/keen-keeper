import React, { useContext} from 'react';
import { UserContext } from '../../usercontext/Usercontext';

const Timelinedetails = () => {


  const {timelinevideocall} = useContext(UserContext);
  console.log("timelinevideocall", timelinevideocall);

  return (
    <div className='max-w-260 mx-auto '>
      <h2>{timelinevideocall.length}</h2>
    </div>
  );
};

export default Timelinedetails;