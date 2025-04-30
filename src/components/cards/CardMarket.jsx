import "../../styles/Market/cardMarket.css";
import useFormatMoney from "../../hooks/useFormatMoney";

const CardMarket = ({ cost, description, name }) => {
  const { format } = useFormatMoney();
  return (
    <div className="container">
      <div className="innerContainer">
        <h3>Type</h3>
        <p>{name}</p>
      </div>
      <div className="innerContainer">
        <h3>Cost</h3>
        <p>{format(cost)}</p>
      </div>
      <div className="innerContainer">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardMarket;
