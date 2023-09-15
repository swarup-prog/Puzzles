import { useEffect, useState, createContext } from "react";
import { getProducts } from "../apis/getProducts";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null);

  const fetchProducts = async () => {
    const productData = await getProducts();
    setProduct(productData);
    console.log(await productData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={product}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
