import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../utilities/url";
import { useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/");
      setPosts(res?.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(posts);
  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <>
      <Navbar />
      <div className="px-8 md:px-[200px]">
        {posts?.map((post) => (
          <HomePosts key={post._id} post={post} />
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Home;
