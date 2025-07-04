import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthContext';

const SignIn = () => {
  const {signInUser} =useContext(AuthContext)
    const handleSignIn =(e)=>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.password.value;
        console.log(email,password);
      // firebase sign in send
        signInUser(email,password)
        .then(result =>{
          console.log(result.user)
          
          const signInfo ={
            email,
            lastSignInTime :result.user?.metadata?.lastSignInTime
          }
          // update last sign in to the database
          fetch('https://module-56-5-coffee-store-server.vercel.app/users',{
            method:'PATCH',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(signInfo)
          })
          .then(res =>res.json())
          .then(data =>{
            console.log('after updated patch data',data)
          })
        })
        .catch(error =>{
          console.log(error)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl my-10">
      <div className="card-body">
        <form onSubmit={handleSignIn} className="fieldset">
             <h1 className="text-4xl text-center font-bold">Sign In now!</h1>
          {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
         
          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
  
    );
};

export default SignIn;