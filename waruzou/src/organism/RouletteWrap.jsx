import { useEffect, useState } from "react";
import { css } from "@emotion/css";

import { AboutPerPerson } from "../atoms/text/AboutAmount";
import { RouletteText } from "../atoms/text/RouletteText";

export const RouletteWrap = (props) => {
  const { start, showRoulettePerson } = props;
  const [count, setCount] = useState(0);

  const rouletteContents = [
    "身長が二番目に高い人",
    "誕生日が二番目に遅い人",
    "誕生日が一番早い人",
    "身長が一番低い人",
    "財布の中身が\n一番多い人",
    "財布の中身が\n二番目多い人",
    "最終学歴の偏差値が\n二番目に高い人",
    "髪が一番短い人",
    "身長が二番目に低い人",
    "彼女/彼氏と一番長く\n付き合ってる人",
    "最終学歴の偏差値が\n一番低い人",
    "今日一番最後に\n集合した人",
    "身長が一番高い人",
    "爪が一番長い人",
    "Instagramのフォロワーが\n一番多い人",
    "最終学歴の偏差値が\n二番目に低い人",
    "Instagramのフォロワーが\n二番目に多い人",
    "誕生日が一番遅い人",
    "今日一番最初に\n集合した人",
    "誕生日が二番目に\n早い人",
    "最終学歴の偏差値が\n一番高い人",
    "爪が一番短い人",
  ];

  useEffect(() => {
    if (start == true) {
      const interval = setInterval(() => {
        setCount((oldCount) => {
          if (oldCount < rouletteContents.length - 1) return oldCount + 1;
          return 0;
        });
      }, 50);
      return () => clearInterval(interval);
    } else if (start == false) {
      return () => clearInterval();
    }
  }, [start]);

  return (
    <div className={resultWrap}>
      <AboutPerPerson addedStyle={rouletteText}>
        今回のおごりは・・・
      </AboutPerPerson>
      <RouletteText start={start}>
        {showRoulettePerson && rouletteContents[count]}
      </RouletteText>
    </div>
  );
};
const rouletteText = css`
  margin-bottom: 64px;
`;
const resultWrap = css`
  position: absolute;
  top: 45%;
  left: 50%;
  height: 40vh;
  transform: translate(-50%, -50%);
  @media (max-width: 400px) {
    width: calc(100vw - 40px);
  }
  @media (max-height: 740px) {
    height: 43vh;
    margin: 0 auto 3.5vh;
  }
`;
