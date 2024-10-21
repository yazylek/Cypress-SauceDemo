import { BurgerMenu } from "../components/BurgerMenu";
import { Cart } from "../components/Cart";
import { CartView } from "./CartView";

export class BasePage {
  public get BurgerMenu() {
    return new BurgerMenu();
  }

  public get Cart() {
    return new Cart();
  }

  public get CartView() {
    return new CartView();
  }
}
