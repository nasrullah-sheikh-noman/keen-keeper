import React, { useContext } from 'react';
import { UserContext } from '../../usercontext/Usercontext';

const Timelineheader = () => {

   const { timelinevideocall, timelinetext, timelineaudiocall } =
      useContext(UserContext);

  return (
    <div className='max-w-260 mx-auto mt-8 p-4'>
      <h2 className='text-4xl font-bold'>Timeline</h2>
      <div className="flex justify-between mt-6">
        <h2 className="text-lg font-semibold border border-gray-300 px-6 py-3 bg-gray-100 text-cyan-800 rounded-2xl">
          All text : {timelinetext.length}
        </h2>
        <h2 className="text-lg font-semibold border border-gray-300 px-6 py-3 bg-gray-100 text-cyan-800 rounded-2xl">
          All audio call : {timelineaudiocall.length}
        </h2>
        <h2 className="text-lg font-semibold border border-gray-300 px-6 py-3 bg-gray-100 text-cyan-800 rounded-2xl">
          All video call : {timelinevideocall.length}
        </h2>
      </div>
    </div>
  );
};

export default Timelineheader;