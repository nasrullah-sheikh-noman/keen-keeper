import React from 'react';

const Yourfriendscount = () => {
  return (
    <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      <div className='border border-gray-200 px-5 py-12 items-center text-center space-y-3 rounded-lg'>
        <h1 className='text-4xl font-bold'>10</h1>
        <h2 className='text-gray-500'>Total Friends</h2>
      </div>
      <div className='border border-gray-200 px-5 py-12 items-center text-center space-y-3 rounded-lg'>
        <h1 className='text-4xl font-bold'>3</h1>
        <h2 className='text-gray-500'>On Track</h2>
      </div>
      <div className='border border-gray-200 px-5 py-12 items-center text-center space-y-3 rounded-lg'>
        <h1 className='text-4xl font-bold'>6</h1>
        <h2 className='text-gray-500'>Need Attention</h2>
      </div>
      <div className='border border-gray-200 px-5 py-12 items-center text-center space-y-3 rounded-lg'>
        <h1 className='text-4xl font-bold'>12</h1>
        <h2 >Interactions This Month</h2>
      </div>
    </div>
  );
};

export default Yourfriendscount;