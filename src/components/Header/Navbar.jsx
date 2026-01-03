import React from 'react';

const Navbar = () => {
    return (
         <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
            <div className="navbar-start">
                <a className="btn btn-ghost text-2xl font-bold">CS-Ticket System</a>
            </div>
    
            <div className="navbar-end gap-3">
                <a className='text-[16px] text-gray-500 hidden lg:block' href="">Home</a>
                <a className='text-[16px] text-gray-500 hidden lg:block' href="">FAQ</a>
                <a className='text-[16px] text-gray-500 hidden lg:block' href="">Changelog</a>
                <a className='text-[16px] text-gray-500 hidden lg:block' href="">Blog</a>
                <a className='text-[16px] text-gray-500 hidden lg:block' href="">Download</a>
                <a className='text-[16px] text-gray-500 hidden lg:block' href="">Contact</a>
                <a className="btn text-white text-[16px] font-semibold bg-gradient-to-r from-purple-800 via-purple-600 to-purple-500">+New Tickets</a>
            </div>
        </div>
    );
};

export default Navbar;