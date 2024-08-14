

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { useState } from 'react';
const App = () => {
const[name, setName]= useState("");
const[email, setEmail]= useState("");
const[password, setPassword] = useState("");

const collectData = async(e)=>{
   e.preventDefault();
   let result = await fetch("http://localhost:4000/", {
    method :'Post',
    body : JSON.stringify({name, email, password}),
    headers:{
      'Content-type' :'application/JSON'
    },
   });
   result= await result.json();
   localStorage.setItem("user", JSON.stringify(result));
}

  return (
    <div  className='container'>
      <form onSubmit={collectData}>
        <h2 className='text-center-pt-3'>SIGNUP FORM</h2>
        <div className='mb-3 mt-3'>
          <label className='form-label'>UserName</label>
          <input type='text' value={name} 
          onChange={(e)=>setName(e.target.value)}
          className='form-control'/>
        </div>
        <div className='mb-3 mt-3'>
          <label className='form-label'>Email</label>
          <input type='text' value={email} 
          onChange={(e)=>setEmail(e.target.value)}
          className='form-control'/>
        </div>
        <div className='mb-3 mt-3'>
          <label className='form label'>password</label>
          <input type='text' value ={password}
          onChange={(e)=>setPassword(e.target.value)}
           className='form-control'/>
        </div>
        <button className='btn btn-success'>submit</button>
      </form>
    </div>
  )
}

export default App