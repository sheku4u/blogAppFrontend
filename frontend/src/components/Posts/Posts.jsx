import React, { useState, useEffect } from "react";
import styles from "./Box.module.css";
import storyImg from "../../assets/story.png";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Stories from 'react-insta-stories';

import { StoryBox, CustomButton, StoryHandler } from "../index";
function Posts() {
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [currentStory,setCurrentStory] = useState()
  const handleShowMore = () => {
    setShowAll(true);
  };
  const [storyNum, setStoryNum] = useState();
  

  const handleInstaStory = (imgUrl) => {
    // Assuming you have a state to set the current story
    setCurrentStory( [...currentStory,...imgUrl]);
    console.log(currentStory)


  };

  

  const storyBundles = [
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "india",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "india",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "india",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "india",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "india",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "world",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "world",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "world",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "fruit",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "healthcare",
      index: nanoid(),
    },
    {
      imgUrl: storyImg,
      heading: "Heading comes here",
      text: "Inspirational designs, illustrations, and graphic elements from the worlds best designers.",
      uid: "all",
      index: nanoid(),
    },
  ];
  const newList = Object.keys(storyBundles).map(key => ({
    id: key,
    value: storyBundles[key]
  }));
  const [lists,setList] = useState(newList)
console.log(lists)

  // const storyBundles = postArr.map((stor)=> stor.posts)
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",

          position: "relative",
          // height: "50em",
          width: "90vw",
        }}
      >
        {/* top stories  */}
        <div className={styles.title} id="all">
          Top Stories{" "}
        </div>
        <div
          style={{
            display: "flex",
            backgroundColor: "orange",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              listStyle: "none",
              flexWrap: "wrap",
              width: "100%",
              height: "40%",
              backgroundColor: "green",
            }}
          >
            {storyBundles.map((story) => (
              <Link to={'/stories'} key={story.uid}>
                <StoryBox
                  text={story.text}
                  heading={story.heading}
                  imgSrc={story.imgUrl}
                  click={()=>handleInstaStory(story.imgUrl)}
                />
              </Link>
            ))}
            {!showAll && storyBundles.length > 4 && (
        <div className={styles.btn}>
        <CustomButton click={handleShowMore} bgColor={"#FF7373"} text={"See more"} />
      </div>
      )}
            {/* {storyBundles.length > 4 ? <div className={styles.btn}>
                      <CustomButton bgColor={"#FF7373"} text={"See more"} />
                    </div> : null} */}

            {/* {postArr.map((story)=>(
        <li key={story._id} >
          <StoryBox text={story.description} heading={story.heading}  imgSrc={story.imgUrl} />
        </li>
      ))} */}
          </div>
        </div>
        {/* Medical */}
        <div className={styles.title}>Top Stories About Medical</div>
        <div id="medical">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {storyBundles
              .filter((value) => value.uid === "healthcare")
              .map((story, index) => (
                <React.Fragment key={story.uid}>
                  <li>
                    <StoryBox
                      text={story.text}
                      heading={story.heading}
                      imgSrc={story.imgUrl}
                      click={()=>handleInstaStory(story.imgUrl)}
                    />
                  </li>
                  {index >= 4 && (
                    <div className={styles.btn}>
                      <CustomButton bgColor={"#FF7373"} text={"See more"} />
                    </div>
                  )}
                  
                </React.Fragment>
              ))}
          </div>
        </div>

        {/* Food */}
        <div className={styles.title} id="fruits">
          Top Stories About food
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {/* <div>
             <div className={styles.title}>Top Stories About food</div>
          </div> */}

            {storyBundles
              .filter((value) => value.uid === "fruit")
              .map((story, index) => (
                <React.Fragment key={story.uid}>
                  <li>
                    <StoryBox
                      text={story.text}
                      heading={story.heading}
                      imgSrc={story.imgUrl}
                      click={()=>handleInstaStory(story.imgUrl)}
                    />
                  </li>
                  {index >= 4 && (
                    <div className={styles.btn}>
                      <CustomButton bgColor={"#FF7373"} text={"See more"} />
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>

        {/* world */}
        <div className={styles.title}>Top Stories About World </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {/* <div>
             <div className={styles.title}>Top Stories About food</div>
          </div> */}

            {storyBundles
              .filter((value) => value.uid === "india")
              .map((story, index) => (
                <React.Fragment key={story.uid}>
                  <li>
                    <StoryBox
                      text={story.text}
                      heading={story.heading}
                      imgSrc={story.imgUrl}
                      click={()=>handleInstaStory(story.imgUrl)}
                    />
                  </li>
                  {index >= 4 && (
                    <div className={styles.btn}>
                      <CustomButton bgColor={"#FF7373"} text={"See more"} />
                    </div>
                  )}
                </React.Fragment>
              ))}
          </div>
        </div>
        {/* india */}
        <div className={styles.title}>Top Stories About India</div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              listStyle: "none",
            }}
          >
            {storyBundles
              .filter((value) => value.uid === "india")
              .map((story, index) => (
                <React.Fragment key={story.uid}>
                  <li>
                    <StoryBox
                      text={story.text}
                      heading={story.heading}
                      imgSrc={story.imgUrl}
                      click={()=>handleInstaStory(story.imgUrl)}
                    />
                  </li>
                  {index >= 4 && (
                    <div className={styles.btn}>
                      <CustomButton bgColor={"#FF7373"} text={"See more"} />
                    </div>
                  )}
                </React.Fragment>
              ))}

            {/* {postArr.map((story)=>(
        <li key={story._id} >
          <StoryBox text={story.description} heading={story.heading}  imgSrc={story.imgUrl} />
        </li>
      ))} */}

            {/* {postArr.map((stor)=> console.log(stor))} */}
            {/* {storyBundles.map((stor)=> {stor.map((post)=> console.log(`_id : ${post._id} , description: ${post.description} , heading: ${post.heading}, imgUrl:${post.imageUrl} , post= ${post}`))})} */}
          </div>
        </div>
      </div>
      {

      }
      <div>
      {/* <Stories
  stories={currentStory}
  defaultInterval={1500}
  width={432}
  height={768}
/> */}
        {console.log(currentStory)}
      </div>
    </div>
  );
}

export default Posts;
