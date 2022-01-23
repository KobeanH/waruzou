import { useState } from "react";
import styles from "./style.module.css";

export const Game = () => {
  const [items, setItems] = useState([]);
  const [arr1, setArr1] = useState([]);
  const [none, setNone] = useState([]);
  const [count, setCount] = useState(0);

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
      // console.log(array1);
      const aaa = [];
      for (let i = 0; i < 16; i++) {
        aaa.push(false);
      }
      setNone(aaa);
    } else {
      setArr1(array1);
    }
    array1.sort(() => Math.random() - 0.5); //配列の中身をシャッフルする
  };
  // console.log(none);

  //アイテムを選択し、開くか開かないかを決める処理

  const orclick = (arr, i) => {
    setNone(none.map((nnn, index) => (index === i ? true : nnn)));
    if (arr !== 0) {
      setCount(count + 1);
    }
  };
  if (array1.length == count) {
    alert();
  }
  // console.log(array1.length);
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
        <li key={i} onClick={() => orclick(arr, i)}>
          ？<span className={none[i] === true ? "" : styles.none}>{arr}</span>
        </li>
      ))}
    </div>
  );
};
