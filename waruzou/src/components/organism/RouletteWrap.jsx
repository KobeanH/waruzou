import { memo, useEffect, useState } from "react";
import { css } from "@emotion/css";

import { BlackText } from "../atoms/text/BlackText";
import { RouletteText } from "../atoms/text/RouletteText";

export const RouletteWrap = memo((props) => {
  const { startRoulette, showRoulettePerson } = props;
  const [ countexceptzero, setCountExceptZero] = useState(0);

  const rouletteContents = [
"カレー",
"パスタ",
"唐揚げ",
"天ぷら",
"中華",
"ハンバーグ",
"うどん",
"肉じゃが"
  ];

  //ルーレットを回す処理
  useEffect(() => {
    if (startRoulette) {
      const interval = setInterval(() => {
        setCountExceptZero((oldCount) => {
          if (oldCount < rouletteContents.length - 1) return oldCount + 1;
          return 0;
        });
      }, 50);
      return () => clearInterval(interval);
    } else if (!startRoulette) {
      return () => clearInterval();
    }
  }, [startRoulette]);

  return (
    <div className={rouletteWrap}>
      <BlackText addedStyle={rouletteText}>今日のメニューは・・・</BlackText>
      <RouletteText startRoulette={startRoulette}>
        {showRoulettePerson && rouletteContents[countexceptzero]}
      </RouletteText>
    </div>
  );
});

const rouletteWrap = css`
  position: absolute;
  top: 45%;
  left: 50%;
  height: 40vh;
  transform: translate(-50%, -50%);
  width: calc(100vw - 40px);
  @media (max-height: 740px) {
    height: 43vh;
    margin: 0 auto 3.5vh;
  }
`;

const rouletteText = css`
  margin-bottom: 64px;
`;
