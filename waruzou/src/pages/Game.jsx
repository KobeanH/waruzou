import { useState, useEffect } from "react";
import styles from "../style.module.css";
import Modal from "react-modal";

import { MainBtn } from "../atoms/btn/Mainbtn";
// import { SplitModeInput } from "../atoms/input/SplitModeInput";
import { GameInputWrao } from "../molecules/inputWrap/GameInputWrap";
import { LeftLose } from "../molecules/leftLose/LeftLose";
import { GameLottery } from "../organism/GameLottery";
import { ResetGame } from "../organism/ResetGame";

Modal.setAppElement("#root");

export const Game = () => {
  const [items, setItems] = useState([{ amount: "", people: "" }]); //人数分、金額を格納する配列
  const [amountLists, setAmountLists] = useState([]); //
  const [none, setNone] = useState([]); //クラスを付与するstate
  const [count, setCount] = useState(null); //ゲーム終了するカウンター
  const [modalIsOpen, setIsOpen] = useState([]); //モーダル管理
  const [gameEnd, setGameEnd] = useState(false); //ゲーム終了を表示
  const [cantStart, setCantStart] = useState(false); //ゲーム終了を表示
  const [showDelete, setShowDelete] = useState(false); //削除ボタン表示切り替え
  const [showAdd, setShowAdd] = useState(true); //追加するボタン切り替え
  const [showInput, setShowInput] = useState(true); //追加するボタン切り替え
  const [showlist, setShowlist] = useState(false); //追加するボタン切り替え
  const [reset, setReset] = useState(false); //リセットモーダル

  //inputタグを生成
  const createInput = () => {
    const newItems = [...items];

    //全てのinputに金額と人数に数字が入ってなければアラートを出す
    let numInput = 0;
    for (let i = 0; i < newItems.length; i++) {
      if (!(newItems[i].amount && newItems[i].people)) {
        numInput += 1;
      }
    }
    if (numInput > 0) {
      alert("金額と人数を入力してください");
    } else {
      setItems([...items, { amount: "", people: "" }]);
    }
  };

  //inputが一つしかない時に削除ボタンを非表示
  useEffect(() => {
    if (items.length == 1) {
      setShowDelete(false);
    } else {
      setShowDelete(true);
    }
  }, [items]);

  //inputタグを削除
  const deleteInput = (index) => {
    const newItems = [...items];
    const aaa = newItems.splice(index, 1);
    console.log(aaa);
    setItems(newItems);
  };

  //入力された金額をitemsへ格納
  const updateAmount = (index, value) => {
    // const val = val.target.value.replace(/\D/g, "");
    const newItems = [...items];
    newItems[index] = { ...items[index], amount: value };
    setItems(newItems);
  };

  //入力された人数をitemsへ格納
  const updatePeople = (index, value) => {
    // const val = val.target.value.replace(/\D/g, "");
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
    const newItems = [...items];
    let www = 0;
    for (let i = 0; i < newItems.length; i++) {
      if (!(newItems[i].amount && newItems[i].people)) {
        www += 1;
      }
    }
    if (www > 0) {
      alert("金額と人数を入力してください");
      setCantStart(true);
    } else {
      //16個のliタグを生成する処理
      if (array1.length < 16) {
        const sixteen = 16 - array1.length;
        for (let i = 0; i < sixteen; i++) {
          array1.push(0);
        }
        setAmountLists(array1);
        setShowAdd(false);
        setShowInput(false);
        setShowlist(true);
      } else if (array1.length > 16) {
        alert("16人以下に設定してください");
      } else {
        setAmountLists(array1);
        setShowAdd(false);
        setShowInput(false);
        setShowlist(true);
      }
      if (reset) {
        setReset(false);
      }
    }

    //クラスを付与するために16個のfalseを作成し、格納
    const nonearray = [];
    const modalArray = [];
    for (let i = 0; i < 16; i++) {
      nonearray.push(false);
      modalArray.push(false);
    }
    setNone(nonearray);
    setIsOpen(modalArray);
    setCount(0);
    array1.sort(() => Math.random() - 0.5); //配列の中身をシャッフルする
  };

  //アイテムを選択し、開くか開かないかを決める処理
  const orclick = (amountList, index) => {
    setNone(none.map((none, index2) => (index2 === index ? true : none)));
    if (amountList !== 0) {
      setCount(count + 1);
    }
  };

  //modalを開く
  const modalOpen = (amountList, index) => {
    setIsOpen(
      modalIsOpen.map((modal, index3) => (index3 === index ? true : modal))
    );
  };

  //モーダルを閉じる
  const closeModal = (amountList, index) => {
    setIsOpen(
      modalIsOpen.map((modal, index4) => (index4 === index ? false : modal))
    );
  };

  //金額が入力されたものが全部引かれたらゲーム終了
  useEffect(() => {
    if (!cantStart && array1.length == count) {
      setGameEnd(true);
    }
  }, [count]);

  //ゲームをリセットする
  const gameReset = () => {
    setItems([{ amount: "", people: "" }]);
    setAmountLists([]);
    setGameEnd(false);
    setShowAdd(true);
    setShowInput(true);
    setShowlist(false);
  };

  const resetModal = () => {
    setReset(true);
  };
  const hideResetModal = () => {
    setReset(false);
  };

  return (
    <div className="game">
      {showAdd && <MainBtn onClick={() => createInput()}>追加する</MainBtn>}
      {showInput &&
        items.map((item, i) => (
          <GameInputWrao
            key={i}
            amount={"金額"}
            itemAmount={item.amount}
            updateAmount={(e) => updateAmount(i, e.target.value)}
            tel={"tel"}
            maxLength8={"8"}
            people={"人数"}
            itemPeople={item.people}
            updatePeople={(e) => updatePeople(i, e.target.value)}
            maxLength2={"2"}
            deleteInput={() => deleteInput(i)}
            showDelete={showDelete}
          ></GameInputWrao>
        ))}

      {showlist &&
        items.map((item, i) => (
          <LeftLose
            key={i}
            itemAmount={item.amount}
            itemPeople={item.people}
          ></LeftLose>
        ))}

      {showAdd && <MainBtn onClick={startGame}>ゲームを開始する</MainBtn>}
      {amountLists.map((amountList, index) => (
        <GameLottery
          key={index}
          modalOpen={() => modalOpen(amountList, index)}
          stylesNone={none[index] === true ? "" : styles.none}
          amountList={amountList}
          modalIsOpen={modalIsOpen[index] === true ? true : false}
          closeModal={() => closeModal(amountList, index)}
          None={none[index] === true ? "" : styles.none}
          orClick={() => orclick(amountList, index)}
          closeModalBtn={(e) => {
            e.stopPropagation();
            closeModal(amountList, index);
          }}
        ></GameLottery>
      ))}

      {gameEnd && <span>ゲームが終了しました</span>}
      {showlist && (
        <>
          <ResetGame
            resetModal={() => resetModal()}
            reset={reset}
            hideResetModal={() => hideResetModal()}
            closeTimeoutMS={500}
            gameReset={() => gameReset()}
          />
        </>
      )}

      {cantStart && <span>金額と人数を入力してください</span>}
    </div>
  );
};
