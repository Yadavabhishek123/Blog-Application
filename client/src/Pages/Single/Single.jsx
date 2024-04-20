import "./single.css"
import React from "react";
import SinglePost from "../../Components/SinglePost/SinglePost"
import Sidebar from "../../Components/Sidebars/Sidebar"

function Single() {
    return (
        <div className="single">
            <SinglePost/>
            <Sidebar />
        </div>
    )
}

export default Single;