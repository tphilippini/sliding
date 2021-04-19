import React, { useState, useEffect } from "react";
import styled from "styled-components";

import PuzzleItem from "./PuzzleItem";

const Wrapper = styled.div`
  display: block;
  position: relative;
  text-align: center;
  width: calc(100vw - 50px);
  transition: box-shadow 0.6s ease 0.8s, -webkit-box-shadow 0.6s ease 0.8s;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);

  max-width: ${(props) => Number(props.width) + 20}px;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 100%;
  }
`;

const ButtonShowFullArt = styled.div`
  position: absolute;
  top: -25px;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.fontColor};
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
`;

const PuzzleWrapper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 10px;

  /* Change depends on theme image */
  background-color: ${(props) => props.bgColor};
  height: ${(props) => Number(props.width) + 20}px;
`;

const Mask = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #ffeed9;

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 100%;
    padding-left: 1px;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  /* width: calc(100% + 4px); */
  width: 100%;

  transform: translateX(-50%) translateY(-50%);

  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: 100%;
  }
`;

const FullArt = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;

  background-position: center center;
  background-size: cover;

  pointer-events: none;
  z-index: 9;
  opacity: 1;
  transition: opacity 0.6s ease;

  background-image: url("${process.env.PUBLIC_URL}/images/${(props) =>
    props.img}.png");

  &.hidden {
    opacity: 0;
  }
`;

const Puzzle = (props) => {
  const [showFullArt, setShowFullArt] = useState(false);
  // const [square, setSquare] = useState([
  //   ...Array(props.dimension * props.dimension).keys(),
  // ]);
  const [square, setSquare] = useState([
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    15,
    14,
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const isAssembled = () => {
    for (let i = 0; i < square.length - 1; i++) {
      if (square[i] > square[i + 1]) {
        return false;
      }
    }
    return true;
  };

  const updateItem = (current, empty) => {
    const newSquare = [...square];
    const currentItem = newSquare[current];
    const emptyItem = newSquare[empty];

    newSquare.splice(current, 1, emptyItem);
    newSquare.splice(empty, 1, currentItem);
    setSquare(newSquare);
  };

  const findEmptyItemIndex = () => {
    return square.findIndex(
      (item) => item === props.dimension * props.dimension - 1
    );
  };

  useEffect(() => {
    if (isAssembled()) {
      console.log("Show good job dialog");
    } else {
      console.log("Not good job, try again");
    }
  }, [isAssembled, square]);

  // useEffect(() => {
  //   for (let i = square.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const currentItem = square[i];
  //     const emptyItem = square[j];

  //     square.splice(i, 1, emptyItem);
  //     square.splice(j, 1, currentItem);
  //   }
  // }, []);

  return (
    <Wrapper className='wrapper' width={props.width}>
      <ButtonShowFullArt
        onMouseEnter={() => setShowFullArt(true)}
        onMouseLeave={() => setShowFullArt(false)}
      >
        VOIR L&apos;ILLUSTRATION
      </ButtonShowFullArt>
      <PuzzleWrapper
        className='puzzle'
        width={props.width}
        bgColor={props.bgColor}
      >
        <Mask>
          <Container>
            {square.map((i, x) => (
              <PuzzleItem
                key={i}
                id={i}
                value={x}
                img={props.img}
                width={props.width}
                dimension={props.dimension}
                updateItem={updateItem}
                findEmptyItemIndex={findEmptyItemIndex}
              />
            ))}
          </Container>
          <FullArt
            className={showFullArt ? "" : "hidden"}
            img={props.img}
          ></FullArt>
        </Mask>
      </PuzzleWrapper>
    </Wrapper>
  );
};

export default Puzzle;
