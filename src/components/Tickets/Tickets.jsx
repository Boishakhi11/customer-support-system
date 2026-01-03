import React, { use } from 'react';
import TicketCard from '../TicketCard/TicketCard';


const Tickets = ({tickets}) => {
    const ticketscontainer = use(tickets);

    return (
        <div className='w-11/12 mx-auto grid grid-cols-8 gap-4 mt-18'>
            <div className='col-span-6'>
                <h1>Customer Tickets</h1>
                <div className='space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-3'>
                    {
                        ticketscontainer.map(ticket=> <TicketCard ticket={ticket}/>)
                    }
                </div>
                
               
            </div>
            <div className='col-span-2'>
                <h1>Task Status</h1>
            </div>
            
        </div>
    );
};

export default Tickets;