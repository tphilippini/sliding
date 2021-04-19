import React from "react";
import styled from "styled-components";

const Item = styled.div`
  display: inline-block;
  position: absolute;
  /* transform: scale(1); */
  /* opacity: 1; */
  text-align: center;
  /* backface-visibility: hidden; */
  border: 1px solid #ffeed9;

  color: black;
  font-weight: bold;
  cursor: pointer;
`;

const PuzzleItem = (props) => {
  const block = props.width / props.dimension;

  const getXY = (index) => {
    return {
      x: index % props.dimension,
      y: Math.floor(index / props.dimension),
    };
  };

  const setImage = () => {
    const { x, y } = getXY(props.id);
    return {
      // background-image: url("${process.env.PUBLIC_URL}/images/${(props) => props.img}.png");
      // "background-image": `url(${require(`@/${this.image}`)})`,
      backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.img}.png)`,
      backgroundSize: `${props.width}px ${props.width}px`,
      backgroundPosition: `-${block * x}px -${block * y}px`,
    };
  };

  const setItemPosition = () => {
    const { x, y } = getXY(props.value);
    const res = {
      width: `${block}px`,
      height: `${block}px`,
      left: `${block * x}px`,
      top: `${block * y}px`,
    };
    if (props.id !== props.dimension * props.dimension - 1) {
      Object.assign(res, setImage());
    }
    return res;
  };

  const handleClick = () => {
    const { x, y } = getXY(props.value);
    const { x: emptyX, y: emptyY } = getXY(props.findEmptyItemIndex());
    // console.log(x, y, "empty", props.findEmptyItemIndex(), emptyX, emptyY);

    if (
      (x === emptyX || y === emptyY) &&
      (Math.abs(x - emptyX) === 1 || Math.abs(y - emptyY) === 1)
    ) {
      // console.log("SWAP", props.value, " TO ", props.findEmptyItemIndex());
      props.updateItem(props.value, props.findEmptyItemIndex());
    }
  };

  return <Item onClick={handleClick} style={setItemPosition()}></Item>;
};

export default PuzzleItem;
