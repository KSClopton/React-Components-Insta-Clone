//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = (props) => {
    const {postsData} = props
    // const [posts, setPosts] = useState(props)
  return (
    <div className="posts-container-wrapper">
      {postsData.map((postObj) => {
        return <Post key={postObj.username} post={postObj}/>
      })
      }
      {
      /* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
