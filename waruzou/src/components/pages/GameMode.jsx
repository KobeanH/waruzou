import { useState, useEffect, memo, useCallback } from "react";
import { css } from "@emotion/css";
import Modal from "react-modal";
import { useRecoilState } from "recoil";

import { LottoArrayState } from "../store/lottoArrayState";
import { ShowState } from "../store/showState";
import { toggleLottoArrayState } from "../store/toggleLottoArrayState";
import { countState } from "../store/countState";
import { modalIsOpenState } from "../store/modalIsOpenState";
import { ShowAnnounceState } from "../store/ShowAnnounceState";
import { showHeaderState } from "../store/showHeaderState";
import { setGameEndState } from "../store/setGameEndState";
import { AnnounceText } from "../atoms/text/AnnounceText";
import { BaseIcon } from "../atoms/icon/Baseicon";
import { AmountIcon } from "../atoms/icon/AmountIcon";
import { NumPplIcon } from "../atoms/icon/NumPplIcon";
import { GameInputWrap } from "../molecules/inputWrap/GameInputWrap";
import { MainBtn } from "../atoms/btn/Mainbtn";
import { LeftLose } from "../molecules/LeftLose";
import { GameLottery } from "../organism/GameLottery";
import { ResetGame } from "../organism/ResetGame";

Modal.setAppElement("#root");

export const GameMode = memo(() => {
  const [lottoArray, setLottoArray] = useRecoilState(LottoArrayState); //人数、金額のオブジェクトを格納する配列
  const [showDelete, setShowDelete] = useState(false); //削除ボタン表示切り替え
  const [amountLists, setAmountLists] = useState([]);
  const [cantStart, setCantStart] = useState(false); //ゲーム終了を表示
  const [show, setShow] = useRecoilState(ShowState); //表示切り替え
  const [showLeftLose, setShowLeftLose] = useState(false); //くじの枚数を表示
  const [showResetModal, setShowResetModal] = useState(false); //リセットモーダルを表示
  const [toggleLottoArray, setToggleLottoArray] = useRecoilState(
    toggleLottoArrayState
  );
  const [countexceptzero, setCountExceptZero] = useRecoilState(countState); //0円以外の金額のくじを引かれた時のカウント
  const [modalIsOpen, setIsOpen] = useRecoilState(modalIsOpenState); //モーダルの表示切り替え
  const [showAnnounce, setShowAnnounce] = useRecoilState(ShowAnnounceState); //アナウンステキストの表示切り替え
  const [showHeader, setShowHeader] = useRecoilState(showHeaderState); //ヘッダーの表示切り替え
  const [gameEnd, setGameEnd] = useRecoilState(setGameEndState); //ゲーム終了を表示
  const [showFoodImg, setShowFoodImg] = useState(false); //フード画像の表示切り替え

  const maxNumPpl = 16;

  const spreadedLottoArray = [...lottoArray];

  let numEmptyInput = 0;
  //全てのinputに数値が入っていなければ+1
  for (let i = 0; i < spreadedLottoArray.length; i++) {
    if (!(spreadedLottoArray[i].objAmount && spreadedLottoArray[i].objNumPpl)) {
      numEmptyInput += 1;
    }
  }

  //inputタグを生成
  const addInput = useCallback(() => {
    //全てのinputに金額と人数の数字が入ってなければアラートを出す
    if (numEmptyInput > 0) {
      alert("金額と人数を入力してください");
    } else {
      setLottoArray([...lottoArray, { objAmount: "", objNumPpl: "" }]);
    }
  }, [lottoArray]);

  //inputが一つしかない時に削除ボタンを非表示
  useEffect(() => {
    if (lottoArray.length === 1) {
      setShowDelete(false);
    } else {
      setShowDelete(true);
    }
  }, [lottoArray]);

  //入力された金額を人数分objAmountArrayへ格納
  const objAmountArray = [];
  lottoArray.forEach((lotto) => {
    const objAmount = parseInt(lotto.objAmount) || 0;
    const objNumPpl = parseInt(lotto.objNumPpl) || 0;
    for (let i = 0; i < objNumPpl; i++) {
      objAmountArray.push(objAmount);
    }
  });

  //ゲームを開始する処理
  const startGame = useCallback(() => {
    //全てのinputに金額と人数の数字が入ってなければアラートを出す
    if (numEmptyInput > 0) {
      alert("金額と人数を入力してください");
      setCantStart(true);
    } else {
      //人数inputに入力された合計が16以下の場合、16になるよう金額0の<li>タグを生成
      if (objAmountArray.length < maxNumPpl) {
        const numAddedZero = maxNumPpl - objAmountArray.length;
        for (let i = 0; i < numAddedZero; i++) {
          objAmountArray.push(0);
        }
        setAmountLists(objAmountArray);
        setShow(false);
        setShowLeftLose(true);
        setShowAnnounce(false);
        setShowHeader(false);
      } else if (objAmountArray.length > maxNumPpl) {
        alert(`${maxNumPpl}人以下に設定してください`);
      } else {
        setAmountLists(objAmountArray);
        setShow(false);
        setShowLeftLose(true);
        setShowAnnounce(false);
        setShowHeader(false);
      }
      setCountExceptZero(0);
    }
    makeArray();
    objAmountArray.sort(() => Math.random() - 0.5); //配列の中身をシャッフルする
  }, [objAmountArray]);

  const makeArray = () => {
    const hideArray = new Array(maxNumPpl).fill(false);
    const modalArray = new Array(maxNumPpl).fill(false);
    const showFoodImg = new Array(maxNumPpl).fill(true);
    setToggleLottoArray(hideArray);
    setIsOpen(modalArray); //各くじのモーダル表示切り替え
    setShowFoodImg(showFoodImg); //各くじのフード画像表示切り替え
  };

  //ゲームをリセットする
  const resetGame = useCallback(() => {
    setLottoArray([{ objAmount: "", objNumPpl: "" }]);
    setAmountLists([]);
    setGameEnd(false);
    setShow(true);
    setShowLeftLose(false);
    setCountExceptZero(null);
    setShowAnnounce(true);
    setShowHeader(true);
    setShowResetModal(false);
  }, [lottoArray]);

  const resetModal = useCallback(() => {
    setShowResetModal(true);
  }, [showResetModal]);

  const hideResetModal = useCallback(() => {
    setShowResetModal(false);
  }, [showResetModal]);

  return (
    <>
      <AnnounceText addStyle={announceTextPosition}>
        金額と人数({maxNumPpl}人以下)を{"\n"}入力してください
      </AnnounceText>
      {show && (
        <>
          <BaseIcon amountIconMargin={amountIconMargin}>
            <AmountIcon />
          </BaseIcon>
          <BaseIcon numPplIconPosition={showDelete ? moveLeft : positionCenter}>
            <NumPplIcon />
          </BaseIcon>
          <GameInputWrap
            spreadedLottoArray={spreadedLottoArray}
            showDelete={showDelete}
            onClick={addInput}
          />
          <MainBtn mainBtnPosition={mainBtnPosition} onClick={startGame}>
            ゲームを開始する
          </MainBtn>
        </>
      )}
      {showLeftLose && (
        <div className={gameLotteryWrap}>
          <LeftLose gameEnd={gameEnd} lottoArray={lottoArray}></LeftLose>
          <GameLottery
            objAmountArray={objAmountArray}
            amountLists={amountLists}
            showFoodImg={showFoodImg}
            setShowFoodImg={setShowFoodImg}
          />
          <ResetGame
            resetModal={resetModal}
            showResetModal={showResetModal}
            hideResetModal={hideResetModal}
            closeTimeoutMS={500}
            resetGame={resetGame}
          />
        </div>
      )}
    </>
  );
});

const amountIconMargin = css`
  margin-bottom: 6px;
  }
`;
const positionCenter = css`
  position: absolute;
  left: 50%;
`;
const moveLeft = css`
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
  transition: initial;
  @media (min-width: 430px) {
    bottom: 12vh;
  }
`;
const announceTextPosition = css`
  top: -90px;
  @media (max-height: 645px) {
    top: -85px;
  }
  @media (max-height: 553px) {
    top: -73px;
  }
`;
const gameLotteryWrap = css`
  display: flex;
  justify-content: center;
`;
