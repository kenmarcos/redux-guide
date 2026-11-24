// Styles
import { useCartContext } from "../../contexts/cart/cart-context";
import * as Styles from "./styles";
import CartItem from "../../components/cart-item/index";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products, productsTotalPrice } = useCartContext();

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
