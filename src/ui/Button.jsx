import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base = `inline-block text-sm uppercase tracking-wide rounded-full
  px-4 bg-(--primary-color) hover:bg-[#39b9b9] transition-colors duration-300
  font-semibold text-(--light-variant) focus:ring focus:ring-[#01b6b6]
  focus:outline-none focus:ring-offset-2 cursor-pointer
  disabled:cursor-not-allowed disabled:bg-gray-500 `;

  const styles = {
    primary: base + "py-3 md:px-6 md:py-4",
    small: base + "py-2 md:px-5 md:py-2.5 text-xs",
    round: base + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary: `inline-block text-sm rounded-full border-2 border-[#B6AC9B]
      font-semibold uppercase tracking-wide hover:bg-[#F8EFDF] hover:text-[#989081]
      transition-colors duration-300 text-[#B6AC9B] focus:ring focus:ring-[#B6AC9B]
      focus:outline-none focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed
      px-4 py-2.5 md:px-6 md:py-3.5`,
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
export default Button;
