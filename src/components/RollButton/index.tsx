import { Dispatch, SetStateAction } from "react";
import style from "./style.module.css";

interface RollButtonType {
  setNumber: Dispatch<SetStateAction<number>>;
}

export const RollButton = ({ setNumber }: RollButtonType) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleClick = () => {
    setNumber(getRandomInt(1, 6));
  };

  return (
    <button className={style["roll-btn"]} onClick={handleClick}>
      Roll Dice
    </button>
  );
};
