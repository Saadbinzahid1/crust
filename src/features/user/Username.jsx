import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden font-semibold text-sm md:block text-(--light-variant)">
      {username}
    </div>
  );
}

export default Username;
