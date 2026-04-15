import React, { useState } from 'react';
import { UserContext } from '../usercontext/Usercontext';



const Useprovider = ({children}) => {

  const [timelinevideocall, setTimelinevideocall] = useState([]);

  return (
    <UserContext.Provider value={{setTimelinevideocall, timelinevideocall}}>
      {children}
    </UserContext.Provider>
  );
};

export default Useprovider;