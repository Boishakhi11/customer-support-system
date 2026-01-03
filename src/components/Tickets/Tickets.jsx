import React, { use, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import Header from '../Header/Header';
import InProgressCard from '../TicketCard/InProgressCard';


const Tickets = ({tickets}) => {
    const ticketscontainer = use(tickets);
    const [customerTicket, setCustomerTicket] = useState([]);

     const handleTicket= (ticket)=> {
     const newTicketItems = [...customerTicket, ticket];
     setCustomerTicket(newTicketItems);
    }

    console.log(customerTicket);

    return (
            <div>
                <Header inProgress= {customerTicket.length}/>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-8 gap-5 mt-18'>
                    <div className='col-span-6'>
                        <h1 className='text-2xl font-semibold text-center lg:text-start'>Customer Tickets</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                            {ticketscontainer.map((ticket)=> 
                            <TicketCard 
                            handleTicket={handleTicket}
                            key={ticket.id} 
                            ticket={ticket}/>)
                            }
                    </div>
                    </div>

                    <div className='col-span-2 mt-10 md:mt-0'>
                        <div>
                            <h1 className='text-2xl font-semibold text-center lg:text-start'>Task Status</h1>
                             {customerTicket.map((currentTicket)=>
                            <InProgressCard
                            key={currentTicket.id}
                            currentTicket={currentTicket}
                            /> )}
                           
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold text-center lg:text-start mt-10'>Resolved Task</h1>
                            <p className='text-gray-500'>No resolved tasks yet.</p>
                        </div>  
                    </div>
            
                </div>
            </div>
        
    );
};

export default Tickets;