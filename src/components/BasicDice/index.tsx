import { DiceBall } from "../DiceBall/inedex";
import style from "./style.module.css";
import cs from "classnames";

export const BasicDice = ({ number: number }) => {
  const numberStyle = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
  };

  return (
    <div className={cs(style["dice"], style[numberStyle[number]])}>
      {Array.from(Array(number).keys()).map(() => (
        <DiceBall />
      ))}
    </div>
  );
};
