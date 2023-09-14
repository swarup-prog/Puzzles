import { useContext, useState } from "react";
import TextInput from "../components/inputFields/TextInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PrimaryButton from "../components/buttons/PrimaryButton";
import createPost from "../apis/createPost";
import { useAlert } from "react-alert";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const alert = useAlert();

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // const response = await createPost(formData);

    // if (response.success) {
    //   alert.success("Post created Successfully!");
    // }
  };

  return (
    <div style={styles.container}>
      <h1>Create a new Blog Post</h1>
      {/* <span>{user}</span> */}
      <form onSubmit={submitHandler} style={styles.form}>
        <TextInput
          type="title"
          name="title"
          label="Title"
          value={formData.title}
          onChange={changeHandler}
        />
        <TextInput
          type="summary"
          name="summary"
          label="Summary"
          value={formData.summary}
          onChange={changeHandler}
        />
        <ReactQuill
          theme="snow"
          value={formData.content}
          onChange={(newValue) =>
            setFormData({ ...formData, content: newValue })
          }
          modules={modules}
          formats={formats}
        />

        <PrimaryButton type="submit" name="Create Post" />
      </form>
    </div>
  );
};

export default CreatePost;

const styles = {
  container: {
    margin: "20px 165px",
    display: "flex",
    gap: 20,
    flexDirection: "column",
  },

  form: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
  },
};
