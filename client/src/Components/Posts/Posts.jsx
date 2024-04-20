import "./posts.css"
import Post from  "../Post/Post"
import React from "react";

function Posts({posts}) { // passing posts as a props
 return (
    <div className="Posts">
      {posts.map((p) => (
        <Post post={p}/>// for each post i call this post componenet
      ))}
    </div>
 );
}; 

export default Posts;