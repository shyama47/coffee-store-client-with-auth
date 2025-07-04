import React, { useState } from 'react';
import AddCoffee from './AddCoffee';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';


const Home = () => {
    const initialCoffees =useLoaderData();
   const [coffees,setCoffees] =useState(initialCoffees)
    return (
        <div>
            
            <div className='my-6'>
                <AddCoffee></AddCoffee>
            </div>
            <div className='text-center space-y-3'>
                <p>--- Sip & Savor ---</p>
            <h1 className='text-5xl text-[#331A15]'>Our Popular Products</h1>
            <button className='px-2 bg-[#E3B577] border border-[#331A15] text-white py-1 rounded-lg'>Add Coffee☕</button>
            </div>
            <div className='grid grid-cols-1 mb-16 md:grid md:grid-cols-2 md:gap-6 px-28 my-5'>
                {
                    coffees.map(coffee =><CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;