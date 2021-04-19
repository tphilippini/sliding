import React, { useContext } from "react";
import Grain from "./components/Grain";
import ThemeSelector from "./components/ThemeSelector";
import Puzzle from "./components/Puzzle";
import IsPlayingButton from "./components/IsPlayingButton";
import IsPlayingContext from "./stores/contexts/playing.context";
import styled from "styled-components";

const Mention = styled.span`
  position: absolute;
  bottom: 0;
  left: 5px;
  height: 20px;
  font-size: 10px;
  font-color: ${(props) => props.theme.fontColor};
  width: auto;
  font-style: italic;
`;

const App = () => {
  const { isPlaying } = useContext(IsPlayingContext);

  return (
    <div id='app'>
      <Grain />
      <ThemeSelector />

      {/* <button className={`btn-previous ${isPlaying ? "is-playing" : ""}`}>
        Précédent
      </button> */}

      <main className={isPlaying ? "is-playing" : ""}>
        <Puzzle dimension='4' width='340' bgColor='#45a3b2' img='0' />
        <IsPlayingButton />
      </main>

      {/* <button className={`btn-next ${isPlaying ? "is-playing" : ""}`}>
        Suivant
      </button> */}

      <Mention>Source of pictures provided by Yuko Higuchi</Mention>
    </div>
  );
};

export default App;
