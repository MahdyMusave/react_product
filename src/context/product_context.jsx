import { createContext } from "react";

const ProductContext = createContext({
  products: [],
  onDelete: () => {},
  onIncrease: () => {},
  onDecrease: () => {},
  onResent: () => {},
});
// console.log(ProductContext);
export default ProductContext;
