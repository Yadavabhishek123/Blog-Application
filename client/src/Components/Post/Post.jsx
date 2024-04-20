import "./post.css"
import React from "react";
import {Link} from "react-router-dom"
function Post({ post }) {
    return (
        <div className="post">
            {post.photo && <img className="postImg" src={post.photo} alt="" />}
            <div className="postInfo">
                <div className="postCats">
                    {post.categories.map((c) => (
                        <span className="postCat">{post.category}</span>
                    ))}
                </div>
                <Link className= "link" to={`/post/${post._id}`}>
                    <span className="postTitle">{post.title}</span>
                </Link>
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">{post.desc}</p>
        </div>
    );
}

export default Post;