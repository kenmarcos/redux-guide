import { BsCartPlus } from "react-icons/bs";

// Components
import CustomButton from "../custom-button/index";

// Styles
import * as Styles from "./styles";
import { useCartDispatch } from "../../contexts/cart/cart-context";
import { addProductAction } from "../../contexts/cart/cart-actions";

// Utilities

const ProductItem = ({ product }) => {
  const dispatch = useCartDispatch();

  const handleAddProduct = () => {
    dispatch(addProductAction(product));
  };

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddProduct}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
