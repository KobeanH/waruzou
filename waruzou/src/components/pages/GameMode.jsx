import { useState, useEffect, memo } from "react";
import { css } from "@emotion/css";
import Modal from "react-modal";
import { useRecoilState } from "recoil";

import { LottoArrayState } from "../store/lottoArrayState";
import { MainBtn } from "../atoms/btn/MainBtn";
import { GameInputWrao } from "../molecules/inputWrap/GameInputWrap";
import { LeftLose } from "../molecules/leftLose/LeftLose";
import { GameLottery } from "../organism/GameLottery";
import { ResetGame } from "../organism/ResetGame";
import { BaseIcon } from "../atoms/icon/Baseicon";
import { NumPplIcon } from "../atoms/icon/NumPplIcon";
import { AmountIcon } from "../atoms/icon/AmountIcon";
import { toggleLottoArrayState } from "../store/toggleLottoArrayState";
import { countState } from "../store/countState";
import { modalIsOpenState } from "../store/modalIsOpenState";
import { ShowState } from "../store/ShowState";
import { AnnounceText } from "../atoms/text/AnnounceText";
import { ShowAnnounceState } from "../store/ShowAnnounceState";
import { showHeaderState } from "../store/showHeaderState";
import { setGameEndState } from "../store/setGameEndState";

Modal.setAppElement("#root");

export const GameMode = memo(() => {
  const [lottoArray, setLottoArray] = useRecoilState(LottoArrayState); //人数分、金額を格納する配列
  const [showDelete, setShowDelete] = useState(false); //削除ボタン表示切り替え
  const [amountLists, setAmountLists] = useState([]);
  const [cantStart, setCantStart] = useState(false); //ゲーム終了を表示
  const [show, setShow] = useRecoilState(ShowState); //追加するボタン切り替え
  const [showLeftLose, setShowLeftLose] = useState(false); //追加するボタン切り替え
  const [showResetModal, setShowResetModal] = useState(false); //リセットモーダル
  const [toggleLottoArray, setToggleLottoArray] = useRecoilState(
    toggleLottoArrayState
  );
  const [count, setCount] = useRecoilState(countState);
  const [modalIsOpen, setIsOpen] = useRecoilState(modalIsOpenState);
  const [showAnnounce, setShowAnnounce] = useRecoilState(ShowAnnounceState);
  const [showHeader, setShowHeader] = useRecoilState(showHeaderState);
  const [gameEnd, setGameEnd] = useRecoilState(setGameEndState); //ゲーム終了を表示
  const [showFoodImg, setShowFoodImg] = useState(false);

  const maxNumPpl = 16;

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
    if (lottoArray.length === 1) {
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
      if (tentativeArray.length < maxNumPpl) {
        const numAddedZero = maxNumPpl - tentativeArray.length;
        for (let i = 0; i < numAddedZero; i++) {
          tentativeArray.push(0);
        }
        setAmountLists(tentativeArray);
        setShow(false);
        setShowLeftLose(true);
        setShowAnnounce(false);
        setShowHeader(false);
      } else if (tentativeArray.length > maxNumPpl) {
        alert(`${maxNumPpl}人以下に設定してください`);
      } else {
        setAmountLists(tentativeArray);
        setShow(false);
        setShowLeftLose(true);
        setShowAnnounce(false);
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
    const hideArray = new Array(maxNumPpl).fill(false);
    const modalArray = new Array(maxNumPpl).fill(false);
    const showFoodImg = new Array(maxNumPpl).fill(true);
    setToggleLottoArray(hideArray);
    setIsOpen(modalArray);
    setShowFoodImg(showFoodImg);
  };

  //ゲームをリセットする
  const resetGame = () => {
    setLottoArray([{ objAmount: "", objNumPpl: "" }]);
    setAmountLists([]);
    setGameEnd(false);
    setShow(true);
    setShowLeftLose(false);
    setCount(null);
    setShowAnnounce(true);
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
          <GameInputWrao
            spreadLottoArray={spreadLottoArray}
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
            tentativeArray={tentativeArray}
            amountLists={amountLists}
            showFoodImg={showFoodImg}
            setShowFoodImg={setShowFoodImg}
          />
          <ResetGame
            resetModal={() => resetModal()}
            showResetModal={showResetModal}
            hideResetModal={() => hideResetModal()}
            closeTimeoutMS={500}
            resetGame={() => resetGame()}
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
