import Header from "../../Components/Header/Header"
import "./home.css"
import Sidebar from "../../Components/Sidebars/Sidebar"
import Posts from "../../Components/Posts/Posts"
import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"


// because we use header only on our home page not every page so we import this in our home component and export this component in app.js 

// we use this{ "proxy":"http://localhost:5000/api/" } proxy url for fetch data from api
function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  // console.log({search});

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search)
      // console.log(res)
      setPosts(res.data);
    }
    fetchPosts();
  },[search])
  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts = {posts}/>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home;
