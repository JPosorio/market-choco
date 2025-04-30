import "../styles/Leaderboard/board.css";
import useGetData from "../hooks/useGetData";
import useComponents from ".";

const LeaderBoard = () => {
  const { CardUser } = useComponents();
  const { data } = useGetData(`${import.meta.env.VITE_API_URL}/leaderboard`);

  return (
    <section id="leaderboard">
      {data?.players?.map(({ rank, username, level, xp, gold }) => (
        <CardUser
          key={username}
          rank={rank}
          username={username}
          level={level}
          xp={xp}
          gold={gold}
        />
      ))}
    </section>
  );
};

export default LeaderBoard;
