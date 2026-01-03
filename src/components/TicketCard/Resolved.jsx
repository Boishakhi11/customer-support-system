import React from 'react';

const Resolved = ({resolved}) => {
    return (
        <div className='p-5 bg-gray-200 border border-green-300 shadow-xl rounded-md'>
            <p className='text-xl text-gray-600'>{resolved.title}</p>
            <p className='text-sm text-gray-600 '> Ticket ID:  {resolved.id}</p>
             <p className='text-sm text-gray-600'> Ticket ID:  {resolved.customer}</p>

            
        </div>
    );
};

export default Resolved;