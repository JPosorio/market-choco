import "../styles/Market/market.css";
import useGetData from "../hooks/useGetData";
import useComponents from ".";

const Market = () => {
  const { CardMarket } = useComponents();
  const { data } = useGetData(`${import.meta.env.VITE_API_URL}/market`);

  return (
    <div id="market">
      {data?.items?.map(({ cost, description, id, name }) => (
        <CardMarket
          key={id}
          cost={cost}
          description={description}
          name={name}
        />
      ))}
    </div>
  );
};

export default Market;
