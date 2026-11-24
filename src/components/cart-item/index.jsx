import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

// Styles
import * as Styles from "./styles";
import { useCartDispatch } from "../../contexts/cart/cart-context";
import {
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
  removeProductAction,
} from "../../contexts/cart/cart-actions";

const CartItem = ({ product }) => {
  const dispatch = useCartDispatch();

  const handleRemoveClick = () => {
    dispatch(removeProductAction(product.id));
  };

  const handleIncreaseClick = () => {
    dispatch(increaseProductQuantityAction(product.id));
  };

  const handleDecreaseClick = () => {
    dispatch(decreaseProductQuantityAction(product.id));
  };

  return (
    <Styles.CartItemContainer>
      <Styles.CartItemImage imageUrl={product.imageUrl} />

      <Styles.CartItemInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>

        <Styles.CartItemQuantity>
          <AiOutlineMinus
            size={20}
            onClick={handleDecreaseClick}
            aria-label={`Decrease quantity of ${product.name}`}
          />
          <p>{product.quantity}</p>
          <AiOutlinePlus
            size={20}
            onClick={handleIncreaseClick}
            aria-label={`Increase quantity of ${product.name}`}
          />
        </Styles.CartItemQuantity>
      </Styles.CartItemInfo>

      <Styles.RemoveButton
        onClick={handleRemoveClick}
        aria-label={`Remove ${product.name}`}
      >
        <AiOutlineClose size={25} />
      </Styles.RemoveButton>
    </Styles.CartItemContainer>
  );
};

export default CartItem;
