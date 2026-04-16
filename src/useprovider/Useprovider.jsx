import { useState } from 'react';
import { UserContext } from '../usercontext/Usercontext';



const Useprovider = ({children}) => {

  const [timelinevideocall, setTimelinevideocall] = useState([]);
  const [timelineaudiocall, setTimelineaudiocall] = useState([]);
  const [timelinetext, setTimelinetext] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <UserContext.Provider value={{setTimelinevideocall, timelinevideocall, timelineaudiocall, setTimelineaudiocall, timelinetext, setTimelinetext, filter,setFilter}}>
      {children}
    </UserContext.Provider>
  );
};

export default Useprovider;