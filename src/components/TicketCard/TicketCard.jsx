import { faCalendar, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const TicketCard = ({ticket, handleTicket}) => {

    return (
        <div onClick={()=> handleTicket(ticket)} className='p-5 bg-gray-200 shadow-xl rounded-md grid col-span-1 space-y-5 mx-auto lg:mx-0'>
            <div className='flex justify-between items-center'>
              <h1 className='font-semibold text-xl text-gray-600'>{ticket.title}</h1>
              <p className='bg-green-300 py-1 px-2 rounded-2xl text-[16px]'> <FontAwesomeIcon icon={faCircle} className='me-1 text-green-700'></FontAwesomeIcon> {ticket.status} </p>
            </div>
            <p className='text-[16px] text-gray-500'> {ticket.description}
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