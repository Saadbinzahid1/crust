import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between bg-[#00a1a1] uppercase px-4 py-3 border-b border-slate-200 sm:px-6">
      <Link to="/" className="text-(--light-variant) tracking-widest">
        Crust
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
