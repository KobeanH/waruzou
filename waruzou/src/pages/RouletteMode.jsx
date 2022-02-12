import { css } from "@emotion/css";
import { MainBtn } from "../atoms/btn/Mainbtn";
import { RouletteWrap } from "../organism/RouletteWrap";

export const RouletteMode = () => {
  const mainBtnPosition = css`
    position: fixed;
    left: 50%;
    bottom: 12vh;
    transform: translate(-50%, -50%);
  `;

  return (
    <>
      <RouletteWrap />
      <MainBtn mainBtnPosition={mainBtnPosition}>スタート</MainBtn>
    </>
  );
};
