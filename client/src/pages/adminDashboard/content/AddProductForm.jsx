import { useState } from "react";
import TextInput from "../../../components/inputFields/TextInput";
import TextArea from "../../../components/inputFields/TextArea";
import FileInput from "../../../components/inputFields/FileInput";
import PrimaryButton from "../../../components/buttons/PrimaryButton";

const AddProductForm = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    offerPrice: "",
    productImage: null,
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form action="" style={styles.form} onSubmit={submitHandler}>
        <TextInput
          type="text"
          label="Product Name"
          name="productName"
          value={formData.productName}
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
        <FileInput
          type="file"
          label="Product Image"
          name="productImage"
          onChange={(e) =>
            setFormData({ ...formData, productImage: e.target.files[0] })
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
