import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import Swal from 'sweetalert2';

const SignUp = () => {
    const {createUser} =useContext(AuthContext)
    
    const handleSignUp =(e)=>{
        e.preventDefault();
        const form =e.target;
       const fromData =new FormData(form);
       const newUser =Object .fromEntries(fromData.entries())
    //    console.log(newUser)
       const {email,password,...userProfile} =newUser;
       console.log(email,password ,userProfile)
    //    createUser in the firebase
       createUser (email,password)
       .then(result =>{
        console.log(result.user);
        // save user profile info in the db
        fetch('http://localhost:3000/users',{
            method:'Post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(userProfile)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log('after profile save' ,data)
            if(data.insertedId){
                Swal.fire({
                        title: "Coffee added successfully!",
                        icon: "success",
                        draggable: true
                      });
            }
        })
       })
       .catch(error =>{
        console.log(error)
       })
    }
    return (
    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <form onSubmit={handleSignUp} className="fieldset">
             <h1 className="text-4xl text-center font-bold">Sign Up now!</h1>
             {/* name */}
          <label className="label">Name</label>
          <input type="text" className="input" name='name' placeholder="User name" />
             {/* address*/}
          <label className="label">Address</label>
          <input type="text" className="input" name='address' placeholder="address" />
             {/* phone*/}
          <label className="label">Phone Number</label>
          <input type="text" className="input" name='phone' placeholder="phone number" />

          {/* photo */}
          <label className="label">Photo </label>
          <input type="text" className="input" name='photo' placeholder="PhotoURL" />
          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  
    );
};

export default SignUp;