import Modal from "react-modal";

import { css } from "@emotion/css";
import { MainBtn } from "../atoms/btn/Mainbtn";

Modal.setAppElement("#root");

export const ResetGame = (props) => {
  const { resetModal, reset, hideResetModal, closeTimeoutMS, gameReset } =
    props;
  console.log(props);
  return (
    <>
      {/* <button type="button" onClick={resetModal}>
        リセットする
      </button> */}
      <MainBtn mainBtnPosition={mainBtnPosition} onClick={resetModal}>
        リセットする
      </MainBtn>
      <Modal
        isOpen={reset}
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
        <span className={block}>本当にリセットしますか？</span>

        <button onClick={gameReset}>Yes</button>
      </Modal>
    </>
  );
};
const portalClassName22 = css`
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
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 11vh;
  transform: translate(-50%, -50%);
`;

const block = css`
  white-space: nowrap;
`;
