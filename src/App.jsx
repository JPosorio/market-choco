import useComponents from "./components";

const App = () => {
  const { Header, LeaderBoard, Market } = useComponents();

  return (
    <main>
      <Header />
      <LeaderBoard />
      <Market />
    </main>
  );
};

export default App;
