import { useState, useEffect } from "react";
import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { css } from "@emotion/css";

import { LottoArrayState } from "../store/lottoArrayState";
import { MainBtn } from "../atoms/btn/Mainbtn";
import { GameInputWrao } from "../molecules/inputWrap/GameInputWrap";
import { LeftLose } from "../molecules/leftLose/LeftLose";
import { GameLottery } from "../organism/GameLottery";
import { ResetGame } from "../organism/ResetGame";
import { Icon } from "../atoms/icon/icon";
import { PersonIcon } from "../atoms/icon/PersonIcon";
import { AmountIcon } from "../atoms/icon/AmountIcon";
import { toggleLottoArrayState } from "../store/toggleLottoArrayState";
import { countState } from "../store/countState";
import { modalIsOpenState } from "../store/modalIsOpenState";
import { showState } from "../store/showState";
import { AnounceText } from "../atoms/text/AnounceText";
import { showAnounceState } from "../store/showAnounceState";
import { showHeaderState } from "../store/showHeaderState";
import { setGameEndState } from "../store/setGameEndState";

Modal.setAppElement("#root");

export const GameMode = () => {
  const [lottoArray, setLottoArray] = useRecoilState(LottoArrayState); //人数分、金額を格納する配列
  const [showDelete, setShowDelete] = useState(false); //削除ボタン表示切り替え
  const [amountLists, setAmountLists] = useState([]);
  // const [gameEnd, setGameEnd] = useState(false); //ゲーム終了を表示
  const [cantStart, setCantStart] = useState(false); //ゲーム終了を表示
  // const [show, setShow] = useState(true); //追加するボタン切り替え
  const [show, setShow] = useRecoilState(showState);
  const [showLeftLose, setShowLeftLose] = useState(false); //追加するボタン切り替え
  const [showResetModal, setShowResetModal] = useState(false); //リセットモーダル
  const [toggleLottoArray, setToggleLottoArray] = useRecoilState(
    toggleLottoArrayState
  );
  const [count, setCount] = useRecoilState(countState);
  const [modalIsOpen, setIsOpen] = useRecoilState(modalIsOpenState);
  const [showAnounce, setShowAnounce] = useRecoilState(showAnounceState);
  const [showHeader, setShowHeader] = useRecoilState(showHeaderState);
  const [gameEnd, setGameEnd] = useRecoilState(setGameEndState);

  const spreadLottoArray = [...lottoArray];

  let numEmptyInput = 0;
  //全てのinputに数値が入っていなければ+1
  for (let i = 0; i < spreadLottoArray.length; i++) {
    if (!(spreadLottoArray[i].objAmount && spreadLottoArray[i].objNumPpl)) {
      numEmptyInput += 1;
    }
  }

  //inputタグを生成
  const addInput = () => {
    //全てのinputに金額と人数の数字が入ってなければアラートを出す
    if (numEmptyInput > 0) {
      alert("金額と人数を入力してください");
    } else {
      setLottoArray([...lottoArray, { objAmount: "", objNumPpl: "" }]);
    }
  };

  //inputが一つしかない時に削除ボタンを非表示
  useEffect(() => {
    if (lottoArray.length == 1) {
      setShowDelete(false);
    } else {
      setShowDelete(true);
    }
  }, [lottoArray]);

  //入力された金額を人数分tentativeArrayへ格納
  const tentativeArray = [];
  lottoArray.forEach((lotto) => {
    const objAmount = parseInt(lotto.objAmount) || 0;
    const objNumPpl = parseInt(lotto.objNumPpl) || 0;
    for (let i = 0; i < objNumPpl; i++) {
      tentativeArray.push(objAmount);
    }
  });

  //ゲームを開始する処理
  const startGame = () => {
    //全てのinputに金額と人数の数字が入ってなければアラートを出す
    if (numEmptyInput > 0) {
      alert("金額と人数を入力してください");
      setCantStart(true);
    } else {
      //人数inputに入力された合計が16以下の場合、16になるよう<li>タグを生成
      if (tentativeArray.length < 16) {
        const sixteen = 16 - tentativeArray.length;
        for (let i = 0; i < sixteen; i++) {
          tentativeArray.push(0);
        }
        setAmountLists(tentativeArray);
        setShow(false);
        setShowLeftLose(true);
        setShowAnounce(false);
        setShowHeader(false);
      } else if (tentativeArray.length > 16) {
        alert("16人以下に設定してください");
      } else {
        setAmountLists(tentativeArray);
        setShow(false);
        setShowLeftLose(true);
        setShowAnounce(false);
        setShowHeader(false);
      }
      //人数が16の時モーダルが表示されるのを無効化
      if (showResetModal) {
        setShowResetModal(false);
      }
      setCount(0);
    }
    makeArray();

    tentativeArray.sort(() => Math.random() - 0.5); //配列の中身をシャッフルする
  };

  //クラスを付与するために16個のfalseを作成し、格納
  const makeArray = () => {
    const hideArray = [];
    const modalArray = [];
    for (let i = 0; i < 16; i++) {
      hideArray.push(false);
      modalArray.push(false);
    }
    setToggleLottoArray(hideArray);
    setIsOpen(modalArray);
  };

  //金額が入力されたものが全部引かれたらゲーム終了
  // useEffect(() => {
  //   if (tentativeArray.length == count) {
  //     setGameEnd(true);
  //   }
  // }, [count]);

  //ゲームをリセットする
  const resetGame = () => {
    setLottoArray([{ objAmount: "", objNumPpl: "" }]);
    setAmountLists([]);
    setGameEnd(false);
    setShow(true);
    setShowLeftLose(false);
    setCount(null);
    setShowAnounce(true);
    setShowHeader(true);
  };

  const resetModal = () => {
    setShowResetModal(true);
  };
  const hideResetModal = () => {
    setShowResetModal(false);
  };

  return (
    <>
      <AnounceText addStyle={anounceTextPosition}>
        金額と人数(16人以下)を{"\n"}入力してください
      </AnounceText>
      {show && (
        <>
          <Icon fromGameMode={amountIconMargin}>
            <AmountIcon />
          </Icon>
          <Icon pplIcon={showDelete === true ? notShowPplIcon : pplIcon}>
            <PersonIcon fromGameMode={personIcon} />
          </Icon>
          <GameInputWrao
            spreadLottoArray={spreadLottoArray}
            showDelete={showDelete}
            onClick={() => addInput()}
          />

          <MainBtn mainBtnPosition={mainBtnPosition} onClick={startGame}>
            ゲームを開始する
          </MainBtn>
        </>
      )}
      {/* {gameEnd && <span>ゲームが終了しました</span>} */}
      {showLeftLose && (
        <>
          <LeftLose gameEnd={gameEnd} lottoArray={lottoArray}></LeftLose>
          <GameLottery
            tentativeArray={tentativeArray}
            amountLists={amountLists}
          />
          <ResetGame
            resetModal={() => resetModal()}
            showResetModal={showResetModal}
            hideResetModal={() => hideResetModal()}
            closeTimeoutMS={500}
            resetGame={() => resetGame()}
          />
        </>
      )}
    </>
  );
};

const amountIconMargin = css`
  margin-bottom: 8px;
  }
`;

const personIcon = css`
  margin: 10px;
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
  transform: translateX(-55%);
  transition: initial;
`;
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, -50%);
`;
const anounceTextPosition = css`
  top: -75px;
`;
