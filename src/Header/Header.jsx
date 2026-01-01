import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <div>
            <Navbar/>
            <div className='w-11/12 mx-auto flex flex-col md:flex-row gap-4'>
                <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-md flex-1 min-h-40 md:min-h-55 relative overflow-hidden'>
                         <div className='absolute w-36 md:w-48 
                         h-full left-0 top-0 
                         bg-[url("vector1.png")] 
                         bg-center bg-cover'></div>
                    
                        <div className='absolute right-0 top-0 
                        w-36 md:w-48 h-full 
                        bg-[url("vector1.png")] 
                        bg-no-repeat bg-cover bg-center rotate-y-180'></div> 

                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white z-10 space-y-1.5'>
                            <p className='text-2xl'>In-Progress</p>
                            <h2 className='text-6xl font-semibold'>0</h2>
                        </div> 
                </div>

                <div className='bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-md flex-1 min-h-40 md:min-h-55 relative overflow-hidden'>
                         <div className='absolute w-36 md:w-48 
                         h-full left-0 top-0 
                         bg-[url("vector1.png")] 
                         bg-center bg-cover'></div>
                    
                        <div className='absolute right-0 top-0 
                        w-36 md:w-48 h-full 
                        bg-[url("vector1.png")] 
                        bg-no-repeat bg-cover bg-center rotate-y-180'></div> 

                        <div className='absolute inset-0 flex flex-col items-center justify-center text-white z-10 space-y-2'>
                            <p className='text-2xl'>Resolved</p>
                            <h2 className='font-semibold text-6xl'>0</h2>
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default Header;