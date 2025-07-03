import React from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({coffee,setCoffees,coffees}) => {
    const {_id,photo,name,quantity,price} =coffee;
    // console.log(coffee)
    const handleDelete =(rechiveId)=>{
console.log(rechiveId)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/coffees/${rechiveId}`,{
        method:'delete',
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        if(data.deletedCount){
             Swal.fire({
      title: "Deleted!",
      text: "Your coffee has been deleted.",
      icon: "success"
    });
    // remove the coffee from ui
    const remainingCoffee =coffees.filter(cof =>cof._id !==rechiveId)
    setCoffees(remainingCoffee);
        }
       
    })
    
  }
});
    }
    return (
        <div className="card card-side bg-[#F5F4F1] shadow-sm p-5">
  <figure>
    <img className='w-[150px] h-[150px]'
      src={photo}
      alt="Movie" />
  </figure>
  <div className="flex justify-around w-full mt-7">
    <div className=''>
        <h2 className="font-semibold">Name :  <span className='text-[#5C5B5B]'>{name}</span></h2>
    <p className='font-semibold'>Quantity :  <span className='text-[#5C5B5B]'>{quantity}</span></p>
    <p className='font-semibold'>Price :   <span className='text-[#5C5B5B]'>{price}</span></p>
    </div>
    <div className="card-actions justify-end">
      <div className="join join-vertical space-y-2">
  <Link to={`/coffeeDetail/${_id}`}>
  <button  className="px-1 py-1 join-itemv bg-[#E3B577] text-white"><FaEye /></button>
  </Link>
  <Link to={`/updateCoffeeData/${_id}`}>
  <button className="px-1 py-1 join-item bg-black text-white"><MdEdit /></button>
  </Link>
  <button onClick={()=>handleDelete(_id)} className="px-1 py-1 join-item bg-red-500 text-white"><MdDelete /></button>
</div>
    </div>
  </div>
</div>
    );
};

export default CoffeeCard;