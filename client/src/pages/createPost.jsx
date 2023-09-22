import { useCallback, useContext, useState } from "react";
import TextInput from "../components/inputFields/TextInput";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { UserContext } from "../context/userProvider";
import axios from "axios";
import { toastError, toastSuccess } from "../utils/toast";
import createPost from "../apis/createPost";
import FileInput from "../components/inputFields/FileInput";

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
  const initialFormData = {
    title: "",
    summary: "",
    content: "",
    user: "",
  };

  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    user: "",
  });

  const [file, setFile] = useState({
    preview: "",
    data: "",
  });

  const handleFileChange = useCallback((e) => {
    const file = e.target.files[0];
    // const name = file.name;
    if (!file) {
      toastError("Please select a file");
    }

    setFile({
      preview: URL.createObjectURL(file),
      data: file,
    });
    console.log(file);
  }, []);

  const { userData } = useContext(UserContext);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cloudinaryUpload = async (form) => {
    const response = await axios.post(
      "http://localhost:8000/api/cloudinary",
      form,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", file.data);

    formData.user = userData._id;

    const cloudinaryResponse = await cloudinaryUpload(form);
    console.log(cloudinaryResponse);

    if (cloudinaryResponse.status === 200) {
      console.log(formData);
      if (cloudinaryResponse.data.url) {
        formData.image = cloudinaryResponse.data.url;
      }
      const response = await createPost(formData);
      if (response.success) {
        toastSuccess(response.message);
        setFormData(initialFormData);
      } else {
        toastError(response.error);
      }
      console.log("response", response);
    } else {
      toastError("Cloudinary upload failed");
      console.log("error");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Create a new Blog Post</h1>
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

        <FileInput
          type="file"
          label="image"
          name="image"
          onChange={handleFileChange}
          style={{ width: "400px" }}
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
