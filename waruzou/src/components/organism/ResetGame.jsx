import { memo } from "react";
import Modal from "react-modal";
import { css } from "@emotion/css";

import { MainBtn } from "../atoms/btn/Mainbtn";
import { BaseModalBtn } from "../atoms/btn/BaseModalBtn";
import {Color} from "../utility/Color"

Modal.setAppElement("#root");

export const ResetGame = memo((props) => {
  const {
    resetModal,
    showResetModal,
    hideResetModal,
    closeTimeoutMS,
    resetGame,
  } = props;
  return (
    <>
      <MainBtn mainBtnPosition={mainBtnPosition} onClick={resetModal}>
        リセットする
      </MainBtn>
      <Modal
        isOpen={showResetModal}
        onRequestClose={hideResetModal}
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
        closeTimeoutMS={closeTimeoutMS}
        portalClassName={portalClassName22}
      >
        <span className={resetText}>本当にリセットしますか？</span>
        <div className={modalBtnWrap}>
          <BaseModalBtn onClick={resetGame}>はい</BaseModalBtn>
          <BaseModalBtn onClick={hideResetModal}>いいえ</BaseModalBtn>
        </div>
      </Modal>
    </>
  );
});

const portalClassName22 = css`
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
const modalBtnWrap = css`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 3vh;
  transform: translate(-50%, -50%);
  @media (max-height: 740px) {
    bottom: 2vh;
  }
`;

const resetText = css`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 36px;
  font-size: 1.6rem;
  white-space: nowrap;
`;
