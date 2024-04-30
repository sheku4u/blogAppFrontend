import React, { useState,useContext,useEffect } from "react";
import styles from "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {CustomButton} from '../index'

function Navbar() {
  const {setUserInfo,userInfo,logoutUserContext, usernameForBackend } = useContext(UserContext)
  const isLoggedIn = window.localStorage.getItem('isLoggedIn')
  const navigate = useNavigate();
  // useEffect(() => {

  //   localStorage.setItem("userInfo", JSON.stringify(userInfo));
  //   localStorage.setItem(
  //     "usernameForBackend",
  //     JSON.stringify(usernameForBackend)
  //   );
  // }, [userInfo, usernameForBackend]);

  // useEffect(() => {
  // fetch("http://localhost:8000/profile",{
  //   credentials:"include",
    
  // })
  // // .then((response)=>{
  // //   response.json().then((userinformation)=>{
  // //     setUserInfo(userinformation)
  // //   })
  // // })
  // }, [])

  const logoutUser= ()=>{
    try {
      
      setUserInfo(null)
      // setUsernameForBackend(null)
      window.localStorage.removeItem('isLoggedIn')
      logoutUserContext()
      alert("logout working properly")
    } catch (error) {
      console.log('error in logout function: ', error)
      alert("not working")
    }
  }
  // const userInfo = userInfo?.userInfo
  console.log(userInfo)
  console.log(usernameForBackend)
  const navItems = [
    {
      text: "Register",
      href: "/register",
      backgroundColor: "#FF7373",
      active: !userInfo,
      click: null
    },
    {
      text: "Login",
      href: "/login",
      backgroundColor: "#73ABFF",
      active: !userInfo,
      click: null
    },
    {
      text: "Bookmark",
      href: "/bookmark",
      backgroundColor: "#FF7373",
      active: userInfo,
      click: null
    },
    {
      text: "Add Story",
      href: "/add-story",
      backgroundColor: "#FF7373",
      active: userInfo,
      click: null
      
    },
    {
      text: "LogOut",
      href: "/logout",
      backgroundColor: "#FF7373",
      active: userInfo,
      click: logoutUser
      
    },
  ];

  return (
    <div className={styles.header}>
      <nav style={{display:"flex", justifyContent:"space-between"}}>
      
        <Link to='/' style={{textDecoration:"none"}}>
        <h1 className={styles.logo}>SwipTory</h1>
        </Link>
        
      

      <span>{/* looping the data which buttons should show or not */}
      {/* <ul style={{display:"flex"}}>
        { navItems.map((item)=>(
          item.active?(
            <li key={item.text} className={styles.navItems}>
              <CustomButton click={()=> navigate(item.href)} bgColor={item.backgroundColor} text={item.text} />
            </li>
          ): null
        )
        ) }
        {/* { !userInfo? navItems.map((item)=>(
          item.active?(
            <li key={item.text}>
              <CustomButton click={()=> navigate(item.href)} bgColor={item.backgroundColor} text={item.text} />
            </li>
          ): null
        )
        ) : null} 
      </ul> */}
{isLoggedIn && (
            <>
              <Link to="/add-story">
                <CustomButton
                  bgColor={"#FF7373"}
                  text={"Add Story"}
                  click={() => navigate("/add-story")}
                />
              </Link>
              <Link to="/bookmark">
                <CustomButton
                  bgColor={"#FF7373"}
                  text={"Bookmark"}
                  click={() => navigate("/bookmark")}
                />
              </Link>

              <CustomButton
                bgColor={"#FF7373"}
                text={"Logout"}
                click={logoutUser}
              />
            </>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/register">
                <CustomButton
                  bgColor={"#FF7373"}
                  text={"Register"}
                  click={() => navigate("/register")}
                />
              </Link>
              <Link to="/login">
                <CustomButton
                  bgColor={"#73ABFF"}
                  text={"Login"}
                  click={() => navigate("/login")}
                />
              </Link>
            </>
          )}



      </span>
      </nav>
    </div>
  );
}

export default Navbar;
