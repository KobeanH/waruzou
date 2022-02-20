import { css } from "@emotion/css";
import { useState } from "react";

import { MainBtn } from "../atoms/btn/Mainbtn";
import { AnounceText } from "../atoms/text/AnounceText";
import { RouletteWrap } from "../organism/RouletteWrap";

export const RouletteMode = () => {
  const [start, setStart] = useState(false);
  const [showRoulettePerson, setShowRoulettePerson] = useState(false);
  const [switchAnounce, setSwitchAnounce] = useState(true);

  const toggleRoulette = () => {
    setStart(!start);
    setShowRoulettePerson(true);
    setSwitchAnounce(!switchAnounce);
  };
  return (
    <>
      <AnounceText>
        {switchAnounce === true
          ? "スタートを押してください"
          : "ストップを押してください"}
      </AnounceText>
      <RouletteWrap start={start} showRoulettePerson={showRoulettePerson} />
      <MainBtn onClick={toggleRoulette} mainBtnPosition={mainBtnPosition}>
        {start === true ? "ストップ" : "スタート"}
      </MainBtn>
    </>
  );
};
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, -50%);
  @media (min-width: 430px) {
    bottom: 12vh;
  }
`;
