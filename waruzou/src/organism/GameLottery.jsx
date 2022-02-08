import Modal from "react-modal";

import { css } from "@emotion/css";

Modal.setAppElement("#root");

export const GameLottery = (props) => {
  const {
    index,
    modalOpen,
    stylesNone,
    amountList,
    modalIsOpen,
    closeModal,
    None,
    orClick,
    closeModalBtn,
    stylesShow,
  } = props;

  return (
    <li key={index} onClick={modalOpen} className={GameLotteryItem}>
      <span className={stylesShow}>？</span>
      <span className={stylesNone}>{amountList}</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
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
        <span className={None}>{amountList}</span>
        <div className={modalBtnWrap}>
          <button type="button" onClick={orClick} className={modalBtn}>
            Yes
          </button>
          <button onClick={closeModalBtn} className={modalBtn}>
            Close Modal
          </button>
        </div>
      </Modal>
    </li>
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
  width: 9.5vh;
  height: 9vh;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
`;
const modalBtnWrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
`;
const modalBtn = css`
  border: none;
  padding: 20px 16px;
  border-radius: 6px;
  background: #6f86d6;
  color: #fff;
  width: 120px;
  box-sizing: border-box;
  white-space: nowrap;
`;
