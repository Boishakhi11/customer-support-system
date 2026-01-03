import React from 'react';

const InProgressCard = ({currentTicket}) => {
    return (
         <div className='p-5 bg-gray-200 shadow-xl rounded-md space-y-4'>
            <h2 className='text-center font-semibold text-xl text-gray-600'> {currentTicket.title}</h2>
            <button className='w-full text-white bg-green-600 rounded-md py-1'>Complete</button>
         </div>
    );
};

export default InProgressCard;