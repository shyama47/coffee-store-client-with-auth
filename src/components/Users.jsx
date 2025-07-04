import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { MdDelete, MdEdit } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers =useLoaderData();
    const [users,setUsers]=useState(initialUsers);
    const handleDelete =(id)=>{
console.log('delete successfully',id)
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`http://localhost:3000/users/${id}`,{
    method:'delete'
})
.then(res =>res.json())
.then(data =>{
    console.log(data)
    if(data.deletedCount){
Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    // remove the from ui
    const remainingData =users.filter(user =>user._id !==id);
    setUsers(remainingData);
    } 
})
  }
});

    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-2xl'>Users : {users.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        users.map((user,index) =>
             <tr key={user._id}>
        <th>
          {index + 1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
         {user.phone}
          <br />
          
        </td>
        <td>Purple</td>
        <th>
          
      <div className="flex gap-3">
  <Link>
  <button  className="px-1 py-1 join-itemv bg-[#E3B577] text-white"><FaEye /></button>
  </Link>
  <Link>
  <button className="px-1 py-1 join-item bg-black text-white"><MdEdit /></button>
  </Link>
  <button onClick={()=>handleDelete(user._id)} className="px-1 py-1 join-item bg-red-500 text-white"><MdDelete /></button>
</div>
        </th>
      </tr>
        )
     }
      
     
      
    </tbody>
   
  </table>
</div>
    );
};

export default Users;