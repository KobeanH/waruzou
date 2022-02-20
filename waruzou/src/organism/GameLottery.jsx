import Modal from "react-modal";
import { css, keyframes } from "@emotion/css";
import { useRecoilState } from "recoil";

import { setGameEndState } from "../store/setGameEndState";

import { toggleLottoArrayState } from "../store/toggleLottoArrayState";
import { countState } from "../store/countState";
import { modalIsOpenState } from "../store/modalIsOpenState";
import { BaseModalBtn } from "../atoms/btn/BaseModalBtn";

Modal.setAppElement("#root");

export const GameLottery = (props) => {
  const { amountLists, tentativeArray } = props;
  const [toggleLottoArray, setToggleLottoArray] = useRecoilState(
    toggleLottoArrayState
  ); //クラスを付与するstate
  const [count, setCount] = useRecoilState(countState); //ゲーム終了するカウンター
  const [modalIsOpen, setIsOpen] = useRecoilState(modalIsOpenState); //モーダル管理
  console.log(tentativeArray);

  const [gameEnd, setGameEnd] = useRecoilState(setGameEndState);

  //アイテムを選択し、開くか開かないかを決める処理
  const openAmount = (amountList, index) => {
    setToggleLottoArray(
      toggleLottoArray.map((toggleLottoArray, index2) =>
        index2 === index ? true : toggleLottoArray
      )
    );
    if (amountList !== 0) {
      setCount(count + 1);
    }
  };

  //モーダルを開く
  const openModal = (index) => {
    setIsOpen(
      modalIsOpen.map((modal, secondIndex) =>
        secondIndex === index ? true : modal
      )
    );
  };

  //モーダルを閉じる
  const closeModal = (amountList, index) => {
    setIsOpen(
      modalIsOpen.map((modal, secondIndex) =>
        secondIndex === index ? false : modal
      )
    );
    if (tentativeArray.length == count) {
      setGameEnd(true);
    }
  };
  const handleLink = () => {
    if (openModal) return;
  };
  const clickHandler = (index) => (openModal(index) ? handleLink : null);
  return (
    <ul className={GameLotteryList}>
      {amountLists.map((amountList, index) => (
        <li
          key={index}
          onClick={() => clickHandler(index)}
          className={
            toggleLottoArray[index] === true
              ? opendGameLotteryItem
              : GameLotteryItem
          }
        >
          <span className={toggleLottoArray[index] === true ? hide : show}>
            ？
          </span>
          <span className={toggleLottoArray[index] === true ? show : hide}>
            ¥{amountList.toLocaleString()}
          </span>
          <Modal
            isOpen={modalIsOpen[index] === true ? true : false}
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
            <span
              className={
                toggleLottoArray[index] === true ? showAmount : invisible
              }
            >
              <span
                className={toggleLottoArray[index] === true ? fade : invisible}
              >
                ¥{amountList.toLocaleString()}
              </span>
            </span>
            <div className={modalBtnWrap}>
              <BaseModalBtn onClick={() => openAmount(amountList, index)}>
                これにする
              </BaseModalBtn>
              <BaseModalBtn
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal(amountList, index);
                }}
              >
                選び直す
              </BaseModalBtn>
            </div>
            {/* <ModalBtnWrap amountList={amountList} index={index}></ModalBtnWrap> */}
          </Modal>
        </li>
      ))}
    </ul>
  );
};
const portalClassName = css`
  .overlay-base {
    padding: 1rem;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0);
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
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
    z-index: 11;
  }

  .overlay-before {
    background-color: rgba(0, 0, 0, 0);
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
    background-color: #fffcf4;
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
const ItemFade = keyframes`
0%{
  opacity:0;
  transform: translateY(20px);
}
100%{
  opacity:1;
  transform: translateY(0);
}
`;

const makeNthChild = (i) => {
  return `
        &:nth-child(${i}) {
          animation: ${ItemFade} 1s ;
          animation-delay: ${i * 0.1}s;
          animation-fill-mode: forwards;
         }
      `;
};
const getNthChild = () => {
  let nthChild = "";
  for (let i = 1; i <= 16; i += 1) {
    nthChild += makeNthChild(i);
  }
  return nthChild;
};
const GameLotteryItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%;
  padding: 6px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  list-style: none;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  opacity: 0;
  ${getNthChild()}
`;

const opendGameLotteryItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23%;
  padding: 6px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  list-style: none;
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
  pointer-events: none;
  opacity: 0.7;
`;
const modalBtnWrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const GameLotteryList = css`
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
`;
const resultItemAnime = keyframes`
0%{
  left:0;
  right:100%;
  background-color:#FFB901;
}
50%{
  left:0;
  right:0;
  background-color:#FFB901;
}
100%{
  left:100%;
  right:0;
  background-color:#FFB901;
}
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
const showAmount = css`
  position: relative;
  display: flex;
  margin-bottom: 36px;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 150px;
  font-size: 24px;
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
const fade = css`
  animation: ${resultItemFadeIn} 1s;
`;
const show = css`
  font-size: 1.4rem;
  word-break: break-all;
`;
const hide = css`
  display: none;
`;

const invisible = css`
  visibility: hidden;
  display: flex;
  align-items: center;
  height: 40px;
  vertical-align: middle;
  margin-bottom: 36px;
  font-size: 24px;
`;
