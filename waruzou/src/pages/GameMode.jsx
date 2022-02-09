import { useState, useEffect } from "react";
import styles from "../style.module.css";
import Modal from "react-modal";

import { MainBtn } from "../atoms/btn/Mainbtn";
import { GameInputWrao } from "../molecules/inputWrap/GameInputWrap";
import { LeftLose } from "../molecules/leftLose/LeftLose";
import { GameLottery } from "../organism/GameLottery";
import { ResetGame } from "../organism/ResetGame";
import { Icon } from "../atoms/icon/icon";
import { AmountState } from "../store/amountState";
import { PplState } from "../store/pplState";
import { useRecoilValue } from "recoil";
import { css } from "@emotion/css";

Modal.setAppElement("#root");

export const GameMode = () => {
  const total = useRecoilValue(AmountState);
  const ppl = useRecoilValue(PplState);
  const [items, setItems] = useState([{ objAmount: "", people: "" }]); //人数分、金額を格納する配列
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
      if (!(newItems[i].objAmount && newItems[i].people)) {
        numInput += 1;
      }
    }
    if (numInput > 0) {
      alert("金額と人数を入力してください");
    } else {
      setItems([...items, { objAmount: "", people: "" }]);
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
    newItems[index] = { ...items[index], objAmount: value };
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
    const objAmount = parseInt(item.objAmount) || 0;
    const people = parseInt(item.people) || 0;
    for (let i = 0; i < people; i++) {
      array1.push(objAmount);
    }
  });

  //ゲームを開始する処理
  const startGame = () => {
    const newItems = [...items];
    let www = 0;
    for (let i = 0; i < newItems.length; i++) {
      if (!(newItems[i].objAmount && newItems[i].people)) {
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
    setItems([{ objAmount: "", people: "" }]);
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
      {showAdd && (
        <MainBtn
          createInputMargin={createInputMargin}
          onClick={() => createInput()}
        >
          追加する
        </MainBtn>
      )}
      {showInput && (
        <>
          <Icon ppl={total}>
            <svg
              id="Layer_1"
              height="26"
              viewBox="0 0 24 24"
              width="26"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
              className={amountImg}
            >
              <path
                fill="#808080"
                d="m22.61.208a1 1 0 0 0 -1.4.182l-9.21 11.97-9.208-11.97a1 1 0 0 0 -1.584 1.22l9.53 12.39h-4.738a1 1 0 0 0 0 2h5v2h-5a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h5a1 1 0 0 0 0-2h-5v-2h5a1 1 0 0 0 0-2h-4.738l9.53-12.39a1 1 0 0 0 -.182-1.402z"
              />
            </svg>
          </Icon>
          <Icon
            ppl={ppl}
            pplIcon={showDelete === true ? notShowPplIcon : pplIcon}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="26"
              height="26"
              className={personImg}
            >
              <g id="_01_align_center" data-name="01 align center">
                <path
                  fill="#808080"
                  d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"
                />
                <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
              </g>
            </svg>
          </Icon>

          <div className={GameInputWrapHeight}>
            {items.map((item, i) => (
              <GameInputWrao
                key={i}
                objAmount={"金額"}
                itemAmount={item.objAmount}
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
          </div>
        </>
      )}

      {showlist && (
        <ul className={LeftLoseList}>
          {items.map((item, i) => (
            <LeftLose
              key={i}
              itemAmount={item.objAmount}
              itemPeople={item.people}
            ></LeftLose>
          ))}
        </ul>
      )}

      {showAdd && (
        <MainBtn mainBtnPosition={mainBtnPosition} onClick={startGame}>
          ゲームを開始する
        </MainBtn>
      )}
      <ul className={GameLotteryList}>
        {amountLists.map((amountList, index) => (
          <GameLottery
            key={index}
            modalOpen={() => modalOpen(amountList, index)}
            stylesNone={none[index] === true ? "" : styles.hide}
            stylesShow={none[index] === true ? styles.hide : ""}
            amountList={amountList}
            modalIsOpen={modalIsOpen[index] === true ? true : false}
            closeModal={() => closeModal(amountList, index)}
            None={none[index] === true ? showAmount : styles.none}
            orClick={() => orclick(amountList, index)}
            closeModalBtn={(e) => {
              e.stopPropagation();
              closeModal(amountList, index);
            }}
          ></GameLottery>
        ))}
      </ul>

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

      {/* {cantStart && <span>金額と人数を入力してください</span>} */}
    </div>
  );
};

const amountImg = css`
  margin: 9px 11px 4px;
  width: 20px;
  @media (max-height: 740px) {
    width: 18px;
  }
`;
const personImg = css`
  margin: 8px 12px 6px;
  width: 20px;
  @media (max-height: 740px) {
    width: 18px;
  }
`;
const pplIcon = css`
  position: absolute;
  left: 50%;
  transition: initial;
  margin-bottom: 10px;
`;
const notShowPplIcon = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  transition: initial;
`;
const GameInputWrapHeight = css`
  height: 50vh;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 11vh;
  transform: translate(-50%, -50%);
`;
const createInputMargin = css`
  margin: 0 auto 2.5vh;
`;

const GameLotteryList = css`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1.5vh 1vh;
`;

const LeftLoseList = css`
  padding: 20px 22px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  gap: 1.5vh;
  &::after {
    content: "";
    display: block;
    width: 100px;
  }
`;
const showAmount = css`
  display: flex;
  height: 70px;
  font-size: 24px;
  vertical-align: middle;
  margin-bottom: 36px;
  align-items: center;
`;
