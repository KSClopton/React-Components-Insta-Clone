//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data"

console.log(dummyData)
const PostsPage = (props) => {
    const {postsData} = props
  return (
    <div className="posts-container-wrapper">
      {
        postsData.map(postObj => {
        return <Post key={postObj.username} props={postObj}></Post>
      })
      }
      {
      /* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
