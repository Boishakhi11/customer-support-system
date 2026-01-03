import { faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TicketCard = ({ticket}) => {
    console.log(ticket);
    return (
        <div className='p-4 bg-gray-200 shadow-2xl rounded-md grid col-span-1'>
            <div className='flex justify-between items-center py-2'>
              <h1 className='font-semibold text-xl text-gray-600'>{ticket.title}</h1>
              <p className='bg-green-300 py-1 px-2 rounded-2xl text-[16px]'> <FontAwesomeIcon icon={faCircle} className='me-1 text-green-700'></FontAwesomeIcon> {ticket.status} </p>
            </div>
            <p className='text-[16px] text-gray-500 py-6'> {ticket.description}
            </p>
            <div className='flex justify-between items-center'> 
                <div className='flex justify-between items-center gap-4'>
                    <h2 className='text-[14px] text-gray-500'>#000{ticket.id}</h2>
                    <h2 className='text-[14px] text-red-600'>{ticket.priority}</h2>
                </div>
                <div className='flex justify-between items-center gap-4'>
                    <h2 className='text-[14px] text-gray-500'>{ticket.customer}</h2>
                    <p className='text-[14px] text-gray-500'><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon> {ticket.createdAt}</p>
                </div>
            </div>
           

        </div>
    );
};

export default TicketCard;