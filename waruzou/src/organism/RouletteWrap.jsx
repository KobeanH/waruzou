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
    "財布の中身が一番多い人",
    "財布の中身が二番目多い人",
    "最終学歴の偏差値が二番目に高い人",
    "髪が一番短い人",
    "身長が二番目に低い人",
    "彼女/彼氏と一番長く付き合ってる人",
    "最終学歴の偏差値が一番低い人",
    "今日一番最後に集合した人",
    "身長が一番高い人",
    "爪一番長い人",
    "Instagramのフォロワーが一番多い人",
    "最終学歴の偏差値が二番目に低い人",
    "Instagramのフォロワーが二番目に多い人",
    "誕生日が一番遅い人",
    "今日一番最初に集合した人",
    "誕生日が二番目に早い人",
    "最終学歴の偏差値が一番高い人",
    "爪一番短い人",
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
      <RouletteText>
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
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 40vh;
  width: 100%;
  box-sizing: inherit;
  margin: 0;
  padding: 40px 32px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  @media (max-width: 400px) {
    width: calc(100vw - 40px);
  }
  @media (max-height: 740px) {
    height: 43vh;
    margin: 0 auto 3.5vh;
  }
`;
