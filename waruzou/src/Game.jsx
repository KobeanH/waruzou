import { useState } from "react";

export const Game = () => {
  const [money, setMoney] = useState(null);
  const [pplNum, setPplNum] = useState(null);
  const [moneyInput, setMoneyInput] = useState(null);
  const [pplNumInput, setPplNumInput] = useState(null);
  const [haoretu, setHairetu] = useState([]);
  const [pressedAddButton, setPressedAddButton] = useState(0);

  const getMoney = (e) => {
    setMoney(() => e.target.value);
  };
  const getPplNum = (e) => {
    setPplNum(() => e.target.value);
  };
  const getMoneyInput = (e) => {
    setMoneyInput(() => e.target.value);
  };
  const getPplNumInput = (e) => {
    setPplNumInput(() => e.target.value);
  };
  const createInput = () => {
    setPressedAddButton(pressedAddButton + 1);
    // let moneyInput = document.createElement("input");
    // moneyInput.setAttribute("type", "number");
    // moneyInput.setAttribute("placeholder", "金額を入力してください");
    // moneyInput.setAttribute("class", "moneyInput");
    // // moneyInput.setAttribute("onchange", "getMoneyInput()");
    // moneyInput.onchange = getMoneyInput;

    // let pplNumInput = document.createElement("input");
    // pplNumInput.setAttribute("type", "number");
    // pplNumInput.setAttribute(
    //   "placeholder",
    //   "追加するハズレの数を入力してください"
    // );
    // pplNumInput.setAttribute("class", "pplNumInput");
    // pplNumInput.onchange = getPplNumInput;

    // document.querySelector(".game").appendChild(moneyInput);
    // document.querySelector(".game").appendChild(pplNumInput);
  };
  // console.log(money);
  console.log(moneyInput);
  console.log(pplNumInput);
  // console.log(pplNumInput);

  // if( moneyInput && pplNumInput){
  //   for(let i = 0, )
  // }

  let list = [];
  for (let i = 0; i < pressedAddButton; i++) {
    list.push(
      <input
        type="number"
        placeholder="金額を入力してください"
        onChange={getMoneyInput}
        key={`money${i}`}
      />,
      <input
        type="number"
        placeholder="人数を入力してください"
        onChange={getPplNumInput}
        key={`ppl${i}`}
      />
    );
  }

  return (
    <div className="game">
      <input type="number" onChange={getMoney} />
      <input type="number" onChange={getPplNum} />
      <button type="button" onClick={() => createInput()}>
        追加する
      </button>
      {/* {pressedAddButton && (
        <input
          type="number"
          placeholder="金額を入力してください"
          onChange={getMoneyInput}
        />
      )} */}
      {list}
    </div>
  );
};
