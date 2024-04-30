/* eslint-disable no-useless-catch */
import {useState,useContext, useEffect} from 'react'
import {Input,CustomButton} from '../index'
import styles from './Login.module.css'
import { Navigate } from 'react-router-dom'
import {UserContext} from '../../context/UserContext'
function Login() {
  const {setUserInfo,userInfo,usernameForBackend, setUsernameForBackend,setUserinformation} = useContext(UserContext)

  
  // useEffect(() => {

  //   localStorage.setItem("userInfo", JSON.stringify(userInfo));
  //   localStorage.setItem(
  //     "usernameForBackend",
  //     JSON.stringify(usernameForBackend)
  //   );
  // }, [userInfo, usernameForBackend]);



  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [redirect,setRedirect] = useState(false)

  


const loginUser=async(ev)=>{
  ev.preventDefault()
  try {
    const response = await fetch('http://localhost:8000/login',{
      method:'POST',
      body:JSON.stringify({username,password}),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    
    })
    console.log(response)
     if(response.ok) {
      response.json().then(userInformation =>{
        // dispatch(authLogin(userInformation))
         setUserinformation(username)
         
         window.localStorage.setItem('isLoggedIn',true)
          // console.log(userInformation)
       
        setRedirect(true)
      })
    } else {
      alert("wrong credentials");

    }
  } catch (error) {
    throw error
  }

  

}
if (redirect) {
  setUsernameForBackend(username)
  return (
  <Navigate to={'/'} />
)
}
  return (
    <div className={styles.main}>
        <h1>Login to SwipTory</h1>
        <form className={styles.block} onSubmit={loginUser}>

        <Input 
        label="Username" 
        placeholder="Enter username" 
        className={styles.input} 
        value={username} 
        onChange={ev=> setUsername(ev.target.value)
        }/>
        <Input 
        label="Password" 
        placeholder="Enter password" 
        value={password} 
        onChange={ev => setPassword(ev.target.value)}
        type={'password'} 
        />
        
        <CustomButton bgColor={"#73ABFF"} text={"Login"}/>
        </form>
        
    </div>
  )
}

export default Login