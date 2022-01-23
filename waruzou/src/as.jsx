import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [person, setPerson] = useState([]);

  //合計金額入力欄
  const getValueFromTotal = (e) => {
    setTotal(() => e.target.value);
  };
  //人数入力欄
  const getValueFromPpl = (e) => {
    setPpl(() => e.target.value);
  };

  //計算をするボタン押した際に一人当たりの計算
  const cal = () => {
    let perPerson = total / ppl;

    for (let i = 0; i < perPerson; i++) {
      person.push(ppl);
    }
    setPerson([...person]); // 追加
  };
  console.log(person);

  return (
    <div className="App">
      <input type="number" className="total" onChange={getValueFromTotal} />
      <input type="number" className="ppl" onChange={getValueFromPpl} />
      <button type="button" onClick={cal}>
        計算する
      </button>
      {person &&
        person.map((p, index) => {
          return <li key={index}>{p}</li>;
        })}
    </div>
  );
}

export default App;


import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  const [kirisute, setKirisute] = useState("");
  const [amari, setAmari] = useState("");

  //合計金額入力欄
  const getValueFromTotal = (e) => {
    setTotal(() => e.target.value);
  };
  //人数入力欄
  const getValueFromPpl = (e) => {
    setPpl(() => e.target.value);
  };

  //計算をするボタン押した際に一人当たりの計算
  const cal = () => {
    let person = total / ppl;
    person = Math.trunc(person);
    const simo = Math.floor(person) % 100;
    console.log(simo);
    if (simo !== 0o0) {
      let person2 = total % ppl;
      console.log("下二桁が00ではありません");

      for (let i = 0; i < ppl; i++) {
        let kirisute = Math.floor(person / 100) * 100;
        let amari = simo * ppl + person2;
        setKirisute(kirisute);
        setAmari(amari);
      }
      // for (let i = 0; i < ppl; i++) {
      //   let kirisute = Math.floor(person / 100) * 100;
      //   let amari = simo * ppl + 1;
      //   console.log(amari);
      //   console.log(kirisute);
      //   perPerson.push(person);
      // }

      console.log(kirisute);
      console.log(amari / 100);
    }
    // for (let i = 0; i < ppl; i++) {
    //   perPerson.push(person);
    // }
    setPerPerson([...perPerson]);
  };
  // console.log(perPerson);

  //下二桁を取得、百えん単位で割り勘する際に使う
  const aaa = 12345;
  const asas = Math.floor(aaa) % 100;
  // console.log(asas);
  if (asas !== 0o0) {
  }

  return (
    <div className="App">
      <input type="number" className="total" onChange={getValueFromTotal} />
      <input type="number" className="ppl" onChange={getValueFromPpl} />
      <button type="button" onClick={() => cal()}>
        計算する
      </button>
      {/* <output className="sum" name="price">
        一人当たり:{perPerson}
      </output> */}
      {perPerson &&
        perPerson.map((p, index) => {
          return <li key={index}>{p}</li>;
        })}
    </div>
  );
}

export default App;






//gamememo

import { useState } from "react";

export const Game = () => {
  const [money, setMoney] = useState(null);
  const [pplNum, setPplNum] = useState(null);
  const [moneyInput, setMoneyInput] = useState(null);
  const [pplNumInput, setPplNumInput] = useState(null);

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
    let moneyInput = document.createElement("input");
    moneyInput.setAttribute("type", "number");
    moneyInput.setAttribute("placeholder", "金額を入力してください");
    moneyInput.setAttribute("class", "moneyInput");
    // moneyInput.setAttribute("onchange", "getMoneyInput()");
    moneyInput.onchange = getMoneyInput;

    let pplNumInput = document.createElement("input");
    pplNumInput.setAttribute("type", "number");
    pplNumInput.setAttribute(
      "placeholder",
      "追加するハズレの数を入力してください"
    );
    pplNumInput.setAttribute("class", "pplNumInput");
    pplNumInput.onchange = getPplNumInput;

    document.querySelector(".game").appendChild(moneyInput);
    document.querySelector(".game").appendChild(pplNumInput);
  };
  console.log(money);
  console.log(moneyInput);
  console.log(pplNumInput);

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





/////最新

import { useState } from "react";
import styles from "./style.module.css";

export const Game = () => {
  const [items, setItems] = useState([]);
  const [arr1, setArr1] = useState([]);
  const [none, setNone] = useState(false);

  const createInput = () => {
    setItems([...items, { amount: "", people: "" }]);
  };

  const updateAmount = (index, value) => {
    const newItems = [...items];
    newItems[index] = { ...items[index], amount: value };
    setItems(newItems);
  };

  const updatePeople = (index, value) => {
    const newItems = [...items];
    newItems[index] = { ...items[index], people: value };
    setItems(newItems);
  };

  const array1 = [];
  items.forEach((item) => {
    const amount = parseInt(item.amount) || 0;
    const people = parseInt(item.people) || 0;
    for (let i = 0; i < people; i++) {
      array1.push(amount);
    }
  });

  //ゲームを開始する処理
  const startGame = () => {
    if (array1.length < 16) {
      const sixteen = 16 - array1.length;
      for (let i = 0; i < sixteen; i++) {
        array1.push(0);
      }
      setArr1(array1);
      console.log(array1);
    } else {
      setArr1(array1);
      console.log(array1);
    }
    array1.sort(() => Math.random() - 0.5); //配列の中身をシャッフルする
  };

  //アイテムを選択し、開くか開かないかを決める処理
  const orclick = () => {
    setNone(true);
    // alert();
  };
  console.log(none);
  return (
    <div className="game">
      <button type="button" onClick={createInput}>
        追加する
      </button>
      {items.map((item, i) => (
        <div key={i}>
          金額:{" "}
          <input
            type="number"
            value={item.amount}
            onChange={(e) => updateAmount(i, e.target.value)}
          />{" "}
          円、 人数:{" "}
          <input
            type="number"
            value={item.people}
            onChange={(e) => updatePeople(i, e.target.value)}
          />{" "}
          人
        </div>
      ))}
      <p>array1 = {JSON.stringify(array1)}</p>

      <button type="button" onClick={startGame}>
        ゲームを開始する
      </button>

      {arr1.map((arr, i) => (
        <li key={i} onClick={orclick}>
          ？<span className={none === true ? "apple" : styles.none}>{arr}</span>
        </li>
      ))}
    </div>
  );
};
