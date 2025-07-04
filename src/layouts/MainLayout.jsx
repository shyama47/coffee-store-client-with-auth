import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
           <div className=' bg-amber-900'>
             <Header></Header>
           </div>
            {import.meta.env.VITE_name}
            <div className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;