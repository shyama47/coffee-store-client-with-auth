import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between p-3'>
            <h1 className='text-2xl font-bold text-[#E3B577]'>Coffee Store</h1>
           <div className='flex gap-5'>
             <NavLink className={({isActive}) =>(isActive ? 'text-[#E3B577]  border-b-2 rounded-box ' : 'text-[#E3B577]')} to='/'>Home</NavLink>
            <NavLink className= {({isActive})=>(isActive ? ' text-[#E3B577]  border-b-2 rounded-box ' : 'text-[#E3B577]')} to='/signin'>SignIn</NavLink>
            <NavLink className= {({isActive})=>(isActive ? ' text-[#E3B577]  border-b-2 rounded-box ' : 'text-[#E3B577]')} to='/signup'>SignUp</NavLink>
           </div>

        </div>
    );
};

export default Header;