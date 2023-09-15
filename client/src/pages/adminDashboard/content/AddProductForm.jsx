import { useState, useCallback } from "react";
import TextInput from "../../../components/inputFields/TextInput";
import TextArea from "../../../components/inputFields/TextArea";
import FileInput from "../../../components/inputFields/FileInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import ItemDropdown from "../../../components/ItemDropdown";
import CheckboxGroup from "../../../components/CheckboxGroup";

import { addProduct } from "../../../apis/addProduct";
import { toastError, toastSuccess } from "../../../utils/toast";
import axios from "axios";

const AddProductForm = () => {
  const categoryLabels = ["Male", "Female", "Unisex"];
  const sizeLabels = ["S", "M", "L", "XL", "XXL"];

  const [file, setFile] = useState({
    preview: "",
    data: "",
  });

  const initialFormData = {
    name: "",
    price: "",
    offerPrice: "",
    description: "",
    image: "",
    quantity: "1",
    category: "",
    size: [],
    tags: "",
  };

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    description: "",
    image: "",
    quantity: "1",
    category: "",
    size: [],
    tags: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const checkboxClickHandler = (e) => {
    const checkboxValue = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      // Append the checkboxValue to the formData.size array
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: [...prevFormData.size, checkboxValue],
      }));
    } else {
      // Remove the checkboxValue from the formData.size array
      setFormData((prevFormData) => ({
        ...prevFormData,
        size: prevFormData.size.filter((size) => size !== checkboxValue),
      }));
    }
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
    if (response.data.url) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: response.data.url,
      }));
    }
    return response.status;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("file", file.data);

    const cloudinaryResponse = await cloudinaryUpload(form);
    console.log(cloudinaryResponse);

    setTimeout(async () => {
      if (cloudinaryResponse === 200) {
        console.log(formData);
        const response = await addProduct(formData);
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
    }, 3000);
  };

  return (
    <div style={styles.container}>
      <div style={styles.heading}>Add Product</div>
      <form action="" style={styles.form} onSubmit={submitHandler}>
        <TextInput
          type="text"
          label="Name"
          name="name"
          value={formData.name}
          onChange={changeHandler}
          style={{ width: "860px" }}
        />
        <TextArea
          label="Description"
          name="description"
          value={formData.description}
          onChange={changeHandler}
        />
        <div style={styles.duoField}>
          <TextInput
            type="text"
            label="Price"
            name="price"
            value={formData.price}
            onChange={changeHandler}
            style={{ width: "400px" }}
          />
          <TextInput
            type="text"
            label="Offer Price"
            name="offerPrice"
            value={formData.offerPrice}
            onChange={changeHandler}
            style={{ width: "400px" }}
          />
        </div>
        <div style={styles.duoField}>
          <TextInput
            type="text"
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={changeHandler}
            style={{ width: "400px" }}
          />
          <TextInput
            type="text"
            label="Tags"
            name="tags"
            value={formData.tags}
            onChange={changeHandler}
            style={{ width: "400px" }}
          />
        </div>

        <div style={{ ...styles.duoField, gap: 210 }}>
          <ItemDropdown
            name="category"
            items={categoryLabels}
            label="Category"
            value={formData.category}
            onChange={changeHandler}
          />
          <CheckboxGroup
            items={sizeLabels}
            label="Sizes"
            onClick={checkboxClickHandler}
          />
        </div>

        <span>
          Size: {formData.size} Quantity: {formData.quantity}
        </span>
        <FileInput
          type="file"
          label="Product Image"
          name="productImage"
          onChange={handleFileChange}
          style={{ width: "400px" }}
        />
        <img src={file.preview} alt="" width={250} height={300} />

        <PrimaryButton type="submit" name="Add Product" />
      </form>
    </div>
  );
};

export default AddProductForm;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },

  heading: {
    fontSize: "20px",
    fontWeight: 700,
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  duoField: {
    display: "flex",
    gap: 20,
  },
};
