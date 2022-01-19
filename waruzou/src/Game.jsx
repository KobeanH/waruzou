import { useState } from "react";

export const Game = () => {
  const [moeny, setMoney] = useState(null);
  const [pplNum, setPplNum] = useState(null);

  const getMoney = (e) => {
    setMoney(() => e.target.value);
  };
  const getPplNum = (e) => {
    setPplNum(() => e.target.value);
  };

  const createInput = () => {
    let moneyInput = document.createElement("input");
    let pplNumInput = document.createElement("input");
    document.querySelector(".game").appendChild(moneyInput);
    document.querySelector(".game").appendChild(pplNumInput);
  };

  return (
    <div className="game">
      <input type="number" onChange={getMoney} />
      <input type="number" onChange={getPplNum} />
      <button type="button" onClick={() => createInput()}>
        追加する
      </button>
    </div>
  );
};
