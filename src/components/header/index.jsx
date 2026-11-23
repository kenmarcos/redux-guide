import { useState } from "react";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const productsCount = useSelector(selectProductsCount);

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        <div>Login</div>
        <div onClick={handleCartClick}>
          Carrinho {productsCount > 0 && `(${productsCount})`}
        </div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
