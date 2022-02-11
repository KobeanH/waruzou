import Modal from "react-modal";
import { css } from "@emotion/css";
import { useRecoilState } from "recoil";

import { toggleLottoArrayState } from "../store/toggleLottoArrayState";
import { countState } from "../store/countState";
import { modalIsOpenState } from "../store/modalIsOpenState";
import { BaseModalBtn } from "../atoms/btn/BaseModalBtn";

Modal.setAppElement("#root");

export const GameLottery = (props) => {
  const { amountLists } = props;
  const [toggleLottoArray, setToggleLottoArray] = useRecoilState(
    toggleLottoArrayState
  ); //クラスを付与するstate
  const [count, setCount] = useRecoilState(countState); //ゲーム終了するカウンター
  const [modalIsOpen, setIsOpen] = useRecoilState(modalIsOpenState); //モーダル管理

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
  };

  return (
    <ul className={GameLotteryList}>
      {amountLists.map((amountList, index) => (
        <li
          key={index}
          onClick={() => openModal(index)}
          className={GameLotteryItem}
        >
          <span className={toggleLottoArray[index] === true ? hide : show}>
            ？
          </span>
          <span className={toggleLottoArray[index] === true ? show : hide}>
            {amountList.toLocaleString()}
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
              {amountList.toLocaleString()}
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
    background-color: #f8f9ff;
    border-radius: 6px;
  }

  .content-before {
    width: 0%;
    height: 0%;
    background-color: transparent;
  }
`;
const GameLotteryItem = css`
  list-style: none;
  display: flex;
  list-style: none;
  width: 23%;
  // height: 9vh;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  &::before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;
const modalBtnWrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const GameLotteryList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-lottoarray: center;
  gap: 1.5vh 0;
  padding: 0;
`;

const showAmount = css`
  display: flex;
  height: 70px;
  font-size: 24px;
  vertical-align: middle;
  margin-bottom: 36px;
  align-items: center;
`;
const show = css`
  font-size: 1.4rem;
`;
const hide = css`
  display: none;
`;
const invisible = css`
  visibility: hidden;
  display: flex;
  align-items: center;
  height: 70px;
  vertical-align: middle;
  margin-bottom: 36px;
  font-size: 24px;
`;
