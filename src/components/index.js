import Header from "./Header";
import LeaderBoard from "./LeaderBoard";
import Market from "./Market";
import useCards from "./cards";

const useComponents = () => {
  const { CardUser, CardMarket } = useCards();
  return {
    Header,
    LeaderBoard,
    Market,
    CardUser,
    CardMarket,
  };
};

export default useComponents;
