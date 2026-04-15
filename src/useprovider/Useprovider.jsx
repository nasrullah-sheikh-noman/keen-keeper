import React, { useState } from 'react';
import { UserContext } from '../usercontext/Usercontext';



const Useprovider = ({children}) => {

  const [timelinevideocall, setTimelinevideocall] = useState([]);
  const [timelineaudiocall, setTimelineaudiocall] = useState([]);
  const [timelinetext, setTimelinetext] = useState([]);

  return (
    <UserContext.Provider value={{setTimelinevideocall, timelinevideocall, timelineaudiocall, setTimelineaudiocall, timelinetext, setTimelinetext}}>
      {children}
    </UserContext.Provider>
  );
};

export default Useprovider;