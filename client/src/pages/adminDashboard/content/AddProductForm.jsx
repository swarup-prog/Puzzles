import { useState } from "react";
import TextInput from "../../../components/inputFields/TextInput";
import TextArea from "../../../components/inputFields/TextArea";
import FileInput from "../../../components/inputFields/FileInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import ItemDropdown from "../../../components/ItemDropdown";
import CheckboxGroup from "../../../components/CheckboxGroup";

import { addProduct } from "../../../apis/addProduct";

const AddProductForm = () => {
  const categoryLabels = ["Male", "Female", "Unisex"];
  const sizeLabels = ["S", "M", "L", "XL", "XXL"];

  const [file, setFile] = useState({
    preview: "",
    data: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    description: "",
    image: null,
    quantity: "1",
    category: "",
    size: [],
    tags: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlefileChange = useCallback((e) => {
    const file = e.target.files[0];
    const name = file.name;
    if (!file) {
      toastError("Please select a file");
    }

    setFile({
      preview: URL.createObjectURL(file),
      data: file,
    });
  });

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

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await addProduct(formData);

    if (response.success) {
      alert.success(response.message);
    } else {
    }
    console.log("response", response);
    // console.log(typeof formData.image);
    // console.log(typeof formData.name);
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
          // onChange={(e) =>
          //   setFormData({ ...formData, image: e.target.files[0] })
          // }
          style={{ width: "400px" }}
        />

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
