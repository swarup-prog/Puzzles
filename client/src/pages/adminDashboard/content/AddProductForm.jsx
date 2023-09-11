import { useState } from "react";
import TextInput from "../../../components/inputFields/TextInput";
import TextArea from "../../../components/inputFields/TextArea";
import FileInput from "../../../components/inputFields/FileInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import ItemDropdown from "../../../components/ItemDropdown";

const AddProductForm = () => {
  const categoryLabels = ["Male", "Female"];

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    offerPrice: "",
    description: "",
    image: null,
    quantity: "1",
    category: "",
    size: "",
    tags: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
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
        <div style={styles.priceFields}>
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

        <ItemDropdown
          name="category"
          items={categoryLabels}
          label="Category"
          value={formData.category}
          onChange={changeHandler}
        />

        <FileInput
          type="file"
          label="Product Image"
          name="productImage"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
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
  priceFields: {
    display: "flex",
    gap: 20,
  },
};
