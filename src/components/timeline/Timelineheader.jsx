import React, { useContext } from 'react';
import { UserContext } from '../../usercontext/Usercontext';

const Timelineheader = () => {

   const { timelinevideocall, timelinetext, timelineaudiocall } =
      useContext(UserContext);

  return (
    <div className='max-w-270 mx-auto mt-8 px-12 md:px-16 lg:px-4 xl:p-0 py-4'>

      <h2 className='text-4xl font-bold'>Timeline</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3  mt-6  gap-6">

        <h2 className="text-lg font-semibold border border-gray-300 px-6 py-3 bg-gray-100 text-cyan-800 rounded-2xl w-fit mx-auto ">
          All text : {timelinetext.length}
        </h2>

        <h2 className="text-lg font-semibold border border-gray-300 px-6 py-3 bg-gray-100 text-cyan-800 rounded-2xl w-fit mx-auto">
          All audio call : {timelineaudiocall.length}
        </h2>

        <h2 className="text-lg font-semibold border border-gray-300 px-6 py-3 bg-gray-100 text-cyan-800 rounded-2xl w-fit mx-auto">
          All video call : {timelinevideocall.length}
        </h2>

      </div>
    </div>
  );
};

export default Timelineheader;