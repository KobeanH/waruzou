import { css } from "@emotion/css";
import { useState } from "react/cjs/react.development";
import { MainBtn } from "../atoms/btn/Mainbtn";
import { RouletteWrap } from "../organism/RouletteWrap";

export const RouletteMode = () => {
  const [start, setStart] = useState(false);
  const [showRoulettePerson, setShowRoulettePerson] = useState(false);

  const toggleRoulette = () => {
    setStart(!start);
    setShowRoulettePerson(true);
  };
  return (
    <>
      <RouletteWrap start={start} showRoulettePerson={showRoulettePerson} />
      <MainBtn onClick={toggleRoulette} mainBtnPosition={mainBtnPosition}>
        {start == true ? "ストップ" : "スタート"}
      </MainBtn>
    </>
  );
};
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 12vh;
  transform: translate(-50%, -50%);
`;
