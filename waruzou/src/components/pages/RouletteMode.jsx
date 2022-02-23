import { memo, useState } from "react";
import { css } from "@emotion/css";

import { AnnounceText } from "../atoms/text/AnnounceText";
import { RouletteWrap } from "../organism/RouletteWrap";
import { MainBtn } from "../atoms/btn/MainBtn";

export const RouletteMode = memo(() => {
  const [switchAnnounce, setSwitchAnnounce] = useState(true);
  const [showRoulettePerson, setShowRoulettePerson] = useState(false);
  const [startRoulette, setStartRoulette] = useState(false);

  const switchRoulette = () => {
    setStartRoulette(!startRoulette);
    setShowRoulettePerson(true);
    setSwitchAnnounce(!switchAnnounce);
  };

  return (
    <>
      <AnnounceText>
        {switchAnnounce
          ? "スタートを押してください"
          : "ストップを押してください"}
      </AnnounceText>
      <RouletteWrap
        startRoulette={startRoulette}
        showRoulettePerson={showRoulettePerson}
      />
      <MainBtn onClick={switchRoulette} mainBtnPosition={mainBtnPosition}>
        {startRoulette ? "ストップ" : "スタート"}
      </MainBtn>
    </>
  );
});
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, -50%);
  @media (min-width: 430px) {
    bottom: 12vh;
  }
`;
