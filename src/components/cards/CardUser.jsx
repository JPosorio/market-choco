import "../../styles/Leaderboard/cardUser.css";

const CardUser = ({ rank, username, level, xp, gold }) => {
  return (
    <div className="container">
      <div>
        <h3>{username}</h3>
        <p>Username</p>
      </div>
      <div className="container-down">
        <div>
          <h3>{rank}</h3>
          <p>Rank</p>
        </div>
        <div>
          <h3>{level}</h3>
          <p>Level</p>
        </div>
        <div>
          <h3>{xp}</h3>
          <p>Xp</p>
        </div>
        <div>
          <h3>{gold}</h3>
          <p>Gold</p>
        </div>
      </div>
    </div>
  );
};

export default CardUser;
