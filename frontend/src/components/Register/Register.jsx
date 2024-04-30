/* eslint-disable no-useless-catch */
import React,{useState, useContext} from 'react'
import {Input,CustomButton} from '../index'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
function Register() {
 const { setUsernameForBackend} = useContext(UserContext)
  const [username,setUsername] = useState()
  const [password,setPassword] = useState()
  const [redirect,setRedirect] = useState(false)
  const createUser=async(ev)=>{
    ev.preventDefault()
    try {
      const response = await fetch('http://localhost:8000/signup',{
        method:'POST',
        body: JSON.stringify({username,password}),
      headers: {'Content-Type':'application/json'},
      
    });
    if (response.ok) {
      alert('registration successful');
      // adding toast for better 
      setRedirect(true)
      // setUsernameForBackend(username)

    } else {
      alert('registration failed');
    }
      console.log(response)

      
    } catch (error) {
      throw error
    }
    
   
  }
  if(redirect){
    return (<Navigate to={'/'} />)
  }
  return (
    <div>
        <h1>Register to SwipTory</h1>
        <form onSubmit={createUser}>
        <Input label="Username" placeholder="Enter username" value={username} onChange={ev => setUsername(ev.target.value)} />
        <Input label="Password" placeholder="Enter password" value={password} onChange={ev => setPassword(ev.target.value)} />
        
        <CustomButton text={"Register"}/>
        </form>
        
    </div>
  )
}

export default Register