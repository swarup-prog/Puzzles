import { useEffect, useState } from "react";

import { getPost } from "../apis/getPost";

import NavigationButton from "../components/buttons/NavigationButton";
import BlogCard from "../components/BlogCard";

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

  const blogCards = blogs?.map((blog) => {
    return (
      <BlogCard
        title={blog.title}
        image={blog.image}
        summary={blog.summary}
        key={blog._id}
      />
    );
  });

  return (
    <div style={styles.container}>
      <NavigationButton to={"/createPost"} name="Create Post" />
      <div style={styles.blogContainer}>{blogCards}</div>
    </div>
  );
};

export default Blog;

const styles = {
  container: {
    margin: "20px 165px",
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
    flexDirection: "column",
  },

  blogContainer: {
    width: "100%",
  },
};
