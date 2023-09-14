import NavigationButton from "../components/buttons/NavigationButton";

const Blog = () => {
  return (
    <div>
      <NavigationButton to={"/createPost"} name="Create Post" />
    </div>
  );
};

export default Blog;
