import React from "react";

const BlogCard = ({ image, title, summary }) => {
  return (
    <div style={styles.container}>
      <img src={image} alt="blog" width={200} height={200} />
      <div>
        <h1>{title}</h1>
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default BlogCard;

const styles = {
  container: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    border: "2px solid #000000",
    padding: "10px",
    gap: 30,
  },
};
