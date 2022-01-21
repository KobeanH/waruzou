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
   const getMoneyInput = (e) => {
    setPplNum(() => e.target.value);
  };
   const getPplNumInput = (e) => {
    setPplNum(() => e.target.value);
  };
aa
  const createInput = () => {
    let moneyInput = document.createElement("input");
    moneyInput.setAttribute("type", "number");
    moneyInput.setAttribute("placeholder", "金額を入力してください");
    moneyInput.setAttribute("class", "moneyInput");
    let pplNumInput = document.createElement("input");
    pplNumInput.setAttribute("type", "number");
    pplNumInput.setAttribute(
      "placeholder",
      "追加するハズレの数を入力してください"
    );
    pplNumInput.setAttribute("class", "pplNumInput");

    document.querySelector(".game").appendChild(moneyInput);
    document.querySelector(".game").appendChild(pplNumInput);
  };
if()
  const makemoneyList = () => {

  }

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
