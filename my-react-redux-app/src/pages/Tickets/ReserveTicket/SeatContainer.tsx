import React, { useState } from "react";
import styled from "styled-components";
import { Seat } from "./Styles";
import Tooltip from "Components/common/Tooltip";

interface SeatContainerProps {
  change: boolean;
  columnIndex: number;
  item: { seatNumber: string; price: number }; // Adjust the type based on your actual data structure
  mainItem: number; // 'key' is a reserved word, consider renaming it
  rowIndex: number;
  price: number;
  setPrice: (price: number) => void;
}

const SeatContainer: React.FC<SeatContainerProps> = ({
  change,
  columnIndex,
  item,
  mainItem,
  rowIndex,
  setPrice,
  price,
}) => {
  const [color, setColor] = useState({
    background: "white",
  });
  const changeColor = (index, col) => {
    console.log("status", col + (index + 1));
    if (color.background == "white") {
      setColor({ background: "orange" });
      setPrice( (item.price + (rowIndex + 1) * 10000000));
    } else {
      setColor({ background: "white" });
      setPrice( (item.price - (rowIndex + 1) * 10000000));
    }
  };
  return (
    <Seat
      onClick={() => changeColor(mainItem, item.seatNumber)}
      change={change}
      columnIndex={columnIndex}
      background={color.background}
    >
      <Tooltip text={`قیمت بلیط: ${item.price}`}>
        {item.seatNumber}
        {mainItem + 1}
      </Tooltip>
    </Seat>
  );
};

export default SeatContainer;
