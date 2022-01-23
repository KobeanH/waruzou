import { useState } from "react";
import styles from "./style.module.css";

export const Game = () => {
  const [none, setNone] = useState(true);

  const arr1 = [1, 2, 3, 4, 5, 6];

  //アイテムを選択し、開くか開かないかを決める処理
  const addNone = () => {
    setNone(false);
  };
  return (
    <div className="game">
      {arr1.map((arr, i) => (
        <li key={i} onClick={addNone}>
          ？<span className={none === true ? styles.none : ""}>{arr}</span>
        </li>
      ))}
    </div>
  );
};
