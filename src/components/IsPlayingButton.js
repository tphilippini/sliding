import React, { useContext } from "react";
import styled from "styled-components";
import IsPlayingContext from "../stores/contexts/playing.context";

const Button = styled.button`
  display: block;
  position: absolute;
  bottom: -28px;
  left: 50%;
  width: 160px;
  height: 56px;
  margin-left: -80px;

  font-weight: 700;
  border-radius: 40px;
  border: transparent;
  background-color: transparent;

  z-index: 10;
  cursor: pointer;

  &.close {
    color: ${(props) => props.theme.fontColor};
    bottom: -60px;
    font-size: 16px;
  }

  .puzzle-button__bg {
    display: none;
    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .puzzle-button__content {
    display: block;
    position: relative;
  }

  &:not(.close) {
    .puzzle-button__bg {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      border-radius: 28px;
      background-color: #eaeaea;
    }

    .puzzle-button__content {
      letter-spacing: 1px;
    }
  }
`;

const IsPlayingButton = () => {
  const { isPlaying, setIsPlaying } = useContext(IsPlayingContext);

  const toggleIsPlaying = (e) => {
    e.preventDefault();
    localStorage.APP_IS_PLAYING = !isPlaying;
    setIsPlaying(!isPlaying);
  };

  return (
    <Button onClick={toggleIsPlaying} className={isPlaying ? "close" : ""}>
      <span className='puzzle-button__bg' />
      <span className='puzzle-button__content'>
        {isPlaying ? "FERMER" : "JOUER"}
      </span>
    </Button>
  );
};

export default IsPlayingButton;
