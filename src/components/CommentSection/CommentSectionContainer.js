// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import dummyData from "../../dummy-data"
import "./Comment.css";

console.log(dummyData.comments)

const CommentSection = props => {
  // Add state for the comments
  const { comments } = props
  return (
    <div>
      {comments.map((commentObj) => {
        console.log(commentObj)
        return <Comment key={commentObj.username} comment={commentObj}/>
          
      })
      
      /* map through the comments data and return the Comment component */}
      <CommentInput />
    </div>
    
  );
};
export default CommentSection;
