import "../styles/header.css";
import useHeader from "../hooks/useHeader";

const Header = () => {
  const { scroollTop } = useHeader();
  return (
    <header>
      <a
        onClick={() => {
          scroollTop("#leaderboard");
        }}
        href="#"
      >
        Leaderboard
      </a>
      <a href="#market">Market</a>
    </header>
  );
};

export default Header;
