import { memo, useEffect, useCallback } from "react";
import { css, keyframes } from "@emotion/css";
import Modal from "react-modal";
import { useRecoilState } from "recoil";

import { toggleLottoArrayState } from "../store/toggleLottoArrayState";
import { countState } from "../store/countState";
import { modalIsOpenState } from "../store/modalIsOpenState";
import { setGameEndState } from "../store/setGameEndState";
import { BaseModalBtn } from "../atoms/btn/BaseModalBtn";
import { FoodImgArray } from "../img/foodImgArray";
import { Color } from "../utility/Color";

Modal.setAppElement("#root");

export const GameLottery = memo((props) => {
  const { amountLists, objAmountArray, showFoodImg, setShowFoodImg } = props;
  const [toggleLottoArray, setToggleLottoArray] = useRecoilState(
    toggleLottoArrayState
  ); //クラスを付与するstate
  const [countexceptzero, setCountExceptZero] = useRecoilState(countState); //ゲーム終了するカウンター
  const [modalIsOpen, setIsOpen] = useRecoilState(modalIsOpenState); //モーダル管理
  const [gameEnd, setGameEnd] = useRecoilState(setGameEndState); //ゲーム終了時の表示切り替え

  //クリックしたくじの金額を表示する処理
  const openAmount = useCallback(
    (amountList, index) => {
      setToggleLottoArray(
        toggleLottoArray.map((toggleLottoArray, secondIndex) =>
          secondIndex === index ? true : toggleLottoArray
        )
      );
      //フード画像が消え、金額が表示されるアニメーション
      setTimeout(() => {
        setShowFoodImg(
          showFoodImg.map((modal, secondIndex) =>
            secondIndex === index ? false : modal
          )
        );
      }, 150);
      //金額が0円以上だったらカウントを+1
      if (amountList !== 0) {
        setCountExceptZero(countexceptzero + 1);
      }
    },
    [toggleLottoArray]
  );

  //クリックしたくじのモーダルを開く
  const openModal = useCallback(
    (index) => {
      setIsOpen(
        modalIsOpen.map((modal, secondIndex) =>
          secondIndex === index ? true : modal
        )
      );
    },
    [modalIsOpen]
  );

  //クリックしたくじのモーダルを閉じる
  const closeModal = useCallback(
    (index) => {
      setIsOpen(
        modalIsOpen.map((modal, secondIndex) =>
          secondIndex === index ? false : modal
        )
      );
      //0円以外のくじが全て引かれ、モーダルを閉じた時にテキストを表示する
      if (objAmountArray.length === countexceptzero) {
        setGameEnd(true);
      }
    },
    [modalIsOpen]
  );

  //0円以外のくじが全て引かれ、モーダルを閉じた時にアラートを表示する
  useEffect(() => {
    if (objAmountArray.length === countexceptzero) {
      alert("全てのハズレが引かれました");
    }
  }, [gameEnd]);

  return (
    <ul className={gameLotteryList}>
      {amountLists.map((amountList, index) => (
        <li
          key={index}
          onClick={() => (openModal(index) ? null : openModal(index))}
          className={
            toggleLottoArray[index] ? opendGameLotteryItem : gameLotteryItem
          }
        >
          <span
            className={
              toggleLottoArray[index] ? hideStuffInModal : showStuffInModal
            }
          >
            {FoodImgArray[index]}
          </span>
          <span
            className={
              toggleLottoArray[index] ? showStuffInModal : hideStuffInModal
            }
          >
            ¥{amountList.toLocaleString()}
          </span>
          <Modal
            isOpen={modalIsOpen[index] === true}
            onRequestClose={() => closeModal(amountList, index)}
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
            portalClassName={portalClassName}
          >
            <span className={toggleLottoArray[index] ? isAmount : isFoodImg}>
              {showFoodImg[index] ? (
                FoodImgArray[index]
              ) : (
                <span className={fadeIn}>
                  {`¥${amountList.toLocaleString()}`}
                </span>
              )}
            </span>
            <div className={modalBtnWrap}>
              <BaseModalBtn onClick={() => openAmount(amountList, index)}>
                これにする
              </BaseModalBtn>
              <BaseModalBtn
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal(index);
                }}
              >
                選び直す
              </BaseModalBtn>
            </div>
          </Modal>
        </li>
      ))}
    </ul>
  );
});

const portalClassName = css`
  .overlay-base {
    padding: 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${Color.subModalOverlayBG};
    opacity: 0;
    transition-property: background-color, opacity;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay-after {
    background-color: ${Color.mainModalOverlayBG};
    opacity: 1;
    z-index: 11;
  }

  .overlay-before {
    background-color: ${Color.subModalOverlayBG};
    opacity: 0;
  }

  .content-base {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    bottom: auto;
    margin: 0 auto;
    border: 0;
    outline: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 0%;
    width: 0%;
    background-color: transparent;
    transition-property: background-color, width, height;
    transition-duration: 500ms;
    transition-timing-function: ease-in-out;
    flex-direction: column;
  }

  .content-after {
    width: 100%;
    height: 30%;
    background-color: ${Color.backGroundModal};
    border-radius: 6px;
    @media (max-height: 553px) {
      height: 35%;
    }
  }

  .content-before {
    width: 0%;
    height: 0%;
    background-color: transparent;
  }
`;

const lottoFadeIn = keyframes`
0%{
  opacity:0;
  transform: translateY(20px);
}
100%{
  opacity:1;
  transform: translateY(0);
}
`;

const createNthChild = (i) => {
  return `
        &:nth-child(${i}) {
          animation: ${lottoFadeIn} 1s ;
          animation-delay: ${i * 0.1}s;
          animation-fill-mode: forwards;
        }
      `;
};

const duplicateNthChild = () => {
  let nthChild = "";
  for (let i = 1; i <= 16; i += 1) {
    nthChild += createNthChild(i);
  }
  return nthChild;
};

const gameLotteryItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 23%;
  padding: 6px;
  background-color:  ${Color.backGroundWhite};
  border-radius: 6px;
  box-shadow: ${Color.mainShadow};
  list-style: none;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  opacity: 0;
  ${duplicateNthChild()}
`;

const opendGameLotteryItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 23%;
  padding: 6px;
  background-color:  ${Color.backGroundWhite};
  border-radius: 6px;
  box-shadow: ${Color.mainShadow};
  list-style: none;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  pointer-events: none;
  opacity: 0.7;
`;

const showStuffInModal = css`
  font-size: 1.4rem;
  word-break: break-all;
  > img {
    width: 28px;
  }
`;

const hideStuffInModal = css`
  display: none;
`;

const gameLotteryList = css`
  position: absolute;
  max-width: calc(100% - 40px);
  top: 40%;
  transform: translateY(-50%);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2vh 0;
  padding: 0;
  @media (max-height: 553px) {
    max-width: 335px;
  }
  @media (min-width: 430px) {
    max-width: 375px;
  }
`;

const resultItemAnime = keyframes`
0%{
  left:0;
  right:100%;
  background-color:${Color.mainColor};
}
50%{
  left:0;
  right:0;
  background-color:${Color.mainColor};
}
100%{
  left:100%;
  right:0;
  background-color:${Color.mainColor};
}
`;

const isAmount = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  font-size: 2.4rem;
  margin-bottom: 36px;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    animation: ${resultItemAnime} 1s;
  }
`;

const isFoodImg = css`
  height: 40px;
  margin-bottom: 36px;
`;

const resultItemFadeIn = keyframes`
0%{
  opacity:0;
}
50%{
  opacity:0;
}
100%{
  opacity:1;
}
`;

const fadeIn = css`
  animation: ${resultItemFadeIn} 1s;
`;

const modalBtnWrap = css`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
`;
