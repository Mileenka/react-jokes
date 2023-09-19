import "./App.css";

import Header from "./Components/Header";
import JokeContainer from "./Components/JokeContainer";

const App = () => {
  return (
    <div>
      <Header title="Jokes Factory" />
      <JokeContainer />
    </div>
  );
};

export default App;
