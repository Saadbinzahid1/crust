import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Crust</Link>
      <SearchOrder />
      <p>Saad Bin Zahid</p>
    </header>
  );
}

export default Header;
