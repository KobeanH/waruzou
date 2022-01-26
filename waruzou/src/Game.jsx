import { useState } from "react";
import styles from "./style.module.css";
import Modal from "react-modal";

import { css } from "@emotion/css";

Modal.setAppElement("#root");

export const Game = () => {
  const [items, setItems] = useState([]); //人数分、金額を格納する配列
  const [amountLists, setAmountLists] = useState([]); //
  const [none, setNone] = useState([]); //クラスを付与するstate
  const [count, setCount] = useState(0); //ゲーム終了するカウンター
  const [modalIsOpen, setIsOpen] = useState(false); //モーダル管理

  const createInput = () => {
    setItems([...items, { amount: "", people: "" }]);
  };

  //入力された金額をitemsへ格納
  const updateAmount = (index, value) => {
    const newItems = [...items];
    newItems[index] = { ...items[index], amount: value };
    setItems(newItems);
  };

  //入力された人数をitemsへ格納
  const updatePeople = (index, value) => {
    const newItems = [...items];
    newItems[index] = { ...items[index], people: value };
    setItems(newItems);
  };

  //入力された金額を人数分itemsへ格納
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
    //16個のliタグを生成する処理
    if (array1.length < 16) {
      const sixteen = 16 - array1.length;
      for (let i = 0; i < sixteen; i++) {
        array1.push(0);
      }
      setAmountLists(array1);
    } else {
      setAmountLists(array1);
    }
    //クラスを付与するために16個のfalseを作成し、格納
    const aaa = [];
    for (let i = 0; i < 16; i++) {
      aaa.push(false);
    }
    setNone(aaa);
    array1.sort(() => Math.random() - 0.5); //配列の中身をシャッフルする
  };

  //アイテムを選択し、開くか開かないかを決める処理
  const orclick = (amountList, index) => {
    setNone(none.map((none, index2) => (index2 === index ? true : none)));
    if (amountList !== 0) {
      setCount(count + 1);
    }
  };

  //金額が入力されたものが全部引かれたらゲーム終了
  if (array1.length == count) {
    console.log("ゲームが終了しました");
  }

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

      {/* {amountLists.map((amountList, index) => (
        <li key={index} onClick={() => orclick(amountList, index)}>
          ？
          <span className={none[index] === true ? "" : styles.none}>
            {amountList}
          </span>
        </li> */}
      {amountLists.map((amountList, index) => (
        <li key={index} onClick={() => orclick(amountList, index)}>
          ？
          <span className={none[index] === true ? "" : styles.none}>
            {amountList}
          </span>
          <Modal
            isOpen={none[index] === true ? true : false}
            onRequestClose={() => setIsOpen(false)}
            overlayClassName={{
              base: "overlay-base",
              afterOpen: "overlay-after",
              beforeClose: "overlay-before",
            }}
            className={{
              base: "content-base",
              afterOpen: "content-after",
              beforeClose: "content-before",
            }}
            closeTimeoutMS={500}
          >
            {amountList}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
            >
              Close Modal
            </button>
          </Modal>
        </li>
      ))}

      {/* <button onClick={() => setIsOpen(true)}>Open Modal</button> */}
    </div>
  );
};
