import { css } from "@emotion/css";
import { useState } from "react";

import { MainBtn } from "../atoms/btn/MainBtn";
import { AnnounceText } from "../atoms/text/AnnounceText";
import { RouletteWrap } from "../organism/RouletteWrap";

export const RouletteMode = () => {
  const [start, setStart] = useState(false);
  const [showRoulettePerson, setShowRoulettePerson] = useState(false);
  const [switchAnnounce, setSwitchAnnounce] = useState(true);

  const toggleRoulette = () => {
    setStart(!start);
    setShowRoulettePerson(true);
    setSwitchAnnounce(!switchAnnounce);
  };
  return (
    <>
      <AnnounceText>
        {switchAnnounce === true
          ? "スタートを押してください"
          : "ストップを押してください"}
      </AnnounceText>
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
