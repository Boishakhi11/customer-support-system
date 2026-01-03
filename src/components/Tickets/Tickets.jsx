import React, { use, useState } from 'react';
import TicketCard from '../TicketCard/TicketCard';
import Header from '../Header/Header';
import InProgressCard from '../TicketCard/InProgressCard';
import { toast } from 'react-toastify';
import Resolved from '../TicketCard/Resolved';


const Tickets = ({tickets}) => {
    const allTickets = use(tickets);
    const [ticketsContainer, setTicketsContainer] = useState(allTickets);

    const [customerTicket, setCustomerTicket] = useState([]);

    const [completeTicket, setCompleteTicket] = useState([]);

   
     const handleTicket= (ticket)=> {
        const isExist = customerTicket.find((item)=> item.id == ticket.id);
        if(isExist){
            toast("Ticket Already is In Progress");
            return;
        }
        const newTicketItems = [...customerTicket, ticket];
        setCustomerTicket(newTicketItems);
    }


    const handleComplete = (ticket) => {
        const resolved = [...completeTicket, ticket];
        setCompleteTicket(resolved);
       
        
        const isComplete = customerTicket.filter((item)=> item.id !== ticket.id)
        if(isComplete){
            toast("Congratulation!! This Ticket is Completed");
        }
        setCustomerTicket(isComplete);

        const remaining = ticketsContainer.filter((item) => item.id !== ticket.id)
        setTicketsContainer(remaining);
    }



    return (
            <div>
                <Header 
                inProgress= {customerTicket.length}
                resolved = {completeTicket.length}/>
                <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-8 gap-5 mt-18'>
                    <div className='col-span-6'>
                        <h1 className='text-2xl font-semibold text-center lg:text-start'>Customer Tickets</h1>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4'>
                            {ticketsContainer.map((ticket)=> 
                            <TicketCard 
                            handleTicket={handleTicket}
                            key={ticket.id} 
                            ticket={ticket}/>)
                            }
                    </div>
                    </div>

                    <div className='col-span-2 mt-10 md:mt-0'>
                        <div className='space-y-4'>
                            <h1 className='text-2xl font-semibold text-center lg:text-start'>Task Status</h1>
                                {customerTicket.map((currentTicket)=>
                                <InProgressCard
                                key={currentTicket.id}
                                currentTicket={currentTicket}
                                handleComplete={handleComplete}
                                /> )}    
                        </div>
                        <div className='space-y-4'>
                            <h1 className='text-2xl font-semibold text-center lg:text-start mt-10'>Resolved Task</h1>
                            {(completeTicket.length === 0)?
                            (<p className='text-gray-500'>No resolved tasks yet.</p>):
                            (<div className='space-y-4'>
                                {completeTicket.map((resolved) => 
                                <Resolved 
                                key={resolved.id}
                                resolved={resolved}/>)}
                            </div>)}
                            
                        </div>  
                    </div>
            
                </div>
            </div>
        
    );
};

export default Tickets;