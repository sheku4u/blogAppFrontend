/* eslint-disable no-useless-catch */
import { v4 as uuidv4 } from 'uuid';
import React, { useState,useContext, useEffect } from "react";
import { CustomButton, Input, TextArea, Slides } from "../index";import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
function AddStory() {

    const {usernameForBackend,setUsernameForBackend,userInfo} = useContext(UserContext)
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [category, setCategory] = useState("");
//   const [userId, setUserId] = useState("");
  const [redirect, setRedirect] = useState(false);
  // useEffect(() => {
  //   const storedUserInfo = localStorage.getItem("userInfo");
  //   const storedUsername = localStorage.getItem("usernameForBackend");

  //   if (storedUserInfo) {
  //     setUserInfo(JSON.parse(storedUserInfo));
  //   }
  //   if (storedUsername) {
  //     setUsernameForBackend(JSON.parse(storedUsername));
  //   }
  // }, []);
  
  const createNewPost = async (ev) => {
    ev.preventDefault();
    const userId = usernameForBackend
    // const userId = uuidv4()
    console.log(usernameForBackend)
    
    // const data = new FormData();
    // data.append("heading", heading);
    // data.append("description", description);
    // data.append("imageUrl", imageUrl);
    // data.append("title", category);
    // data.append("userId", userId);

console.log(userId)
    try {
      const response = await fetch("http://localhost:8000/addPosts", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({ 
            userId: userId,
            // post:[{
            //     heading,description,
            //     imageUrl,
            //     category
            // }
                
            // ] ,
            heading: heading, 
            description: description, 
            imageUrl: imageUrl,
            category: category 
            // data
        }),

      });

      if(response.ok){
        setRedirect(true)
      }
      console.log(response);

    } catch (error) {
      throw error;
    }
  };

  if(redirect){
    return <Navigate to={'/posts'} />
  }

  return (
    <div>
      <button>Close</button>
      <span>
        <Slides />
      </span>
      <form onSubmit={createNewPost}>
        <Input
          label={"Heading:"}
          value={heading}
          onChange={(ev) => setHeading(ev.target.value)}
        />
        <TextArea
          label={"Description:"}
          value={description}
          onChange={(ev) => setDescription(ev.target.value)}
        />
        <Input
          label={"Image:"}
          value={imageUrl}
          onChange={(ev) => setImageUrl(ev.target.value)}
        />
        <Input
          label={"Category:"}
          value={category}
          onChange={(ev) => setCategory(ev.target.value)}
        />
        <CustomButton text={"Post"} />
      </form>
      <CustomButton text={"Previous"} />
      <CustomButton text={"Next"} />
    </div>
  );
}

export default AddStory;
