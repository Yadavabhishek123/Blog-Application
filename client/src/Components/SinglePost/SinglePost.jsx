import "./singlePost.css"
import React, { useEffect, useState } from "react";
import { useLocation,Link } from "react-router-dom";
import axios from "axios";

function SinglePost() {
    const location = useLocation();
    const path = location.pathname.split("/")[2]; // this path is /posts/id so for get id i use this method 
    // console.log(path);

    const [post, setPost] = useState({});
    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            // console.log(res);
            setPost(res.data);
        }
        getPost();
    }, [path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.pohoto && <img src={post.pohoto} alt="" className="singlePostImg" />}
                <h1 className="singlePostTitle">
                    {post.title}
                </h1>
                <div className="singlePostInfo">
                    <Link className="link" to={`/?user=${post.username}`}>
                        <span className="singlePostAuthor">Author : {post.username} </span>
                    </Link>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.desc}</p>
                <button className="singlePostButton">Update</button>
            </div>
        </div>
    )
}

export default SinglePost;