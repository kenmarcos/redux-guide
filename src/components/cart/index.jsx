// Styles
import { useSelector } from "react-redux";
import * as Styles from "./styles";
import CartItem from "../cart-item/index";
import { selectProductsTotalPrice } from "../../redux/cart/selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((store) => store.cart);
  const productsTotalPrice = useSelector(selectProductsTotalPrice);

  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.length > 0 &&
          products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}

        {products.length > 0 && (
          <Styles.CartTotal>TOTAL: R$ {productsTotalPrice}</Styles.CartTotal>
        )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
