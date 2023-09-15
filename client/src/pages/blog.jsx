import { useEffect, useState } from "react";

import { getPost } from "../apis/getPost";

import NavigationButton from "../components/buttons/NavigationButton";

const Blog = () => {
  const [blogs, setBlogs] = useState();

  const fetchBlogs = async () => {
    const blogData = await getPost();
    setBlogs(blogData);
    console.log(await blogData);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div style={styles.container}>
      <NavigationButton to={"/createPost"} name="Create Post" />
      {/* <div>
        <h1>{blogs[1].title}</h1>
        <p>{blogs[1].summary}</p>
      </div> */}
    </div>
  );
};

export default Blog;

const styles = {
  container: {
    margin: "20px 165px",
    display: "flex",
    gap: 20,
    alignItems: "flex-end",
    flexDirection: "column",
  },
};
