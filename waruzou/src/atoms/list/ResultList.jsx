import { css, keyframes } from "@emotion/css";
import { useState } from "react";

import { useRecoilValue } from "recoil";
import { CalculatedObjState } from "../../store/calculatedObj";

export const ResultList = () => {
  const calculatedObj = useRecoilValue(CalculatedObjState);
  const [rouletteContents, setRouletteContents] = useState([
    "身長が二番目に低い人",
    "財布の中身が一番多い人",
    "クレジットカードを持ってる人",
  ]);

  return (
    <ul className={resultList}>
      <p className={resultItem}>{rouletteContents}</p>
    </ul>
  );
};

const resultItemAnime = keyframes`
0%{
  left:0;
  right:100%;
  background-color: #a6b1d9;
}
50%{
  left:0;
  right:0;
  background-color: #a6b1d9;
}
100%{
  left:100%;
  right:0;
  background-color: #a6b1d9;
}
`;
const resultItemAnime2 = keyframes`
0%{
  left:0;
  right:100%;
  background-color: #6f86d6;
}
50%{
  left:0;
  right:0;
  background-color: #6f86d6;ß
}
100%{
  left:100%;
  right:0;
  background-color: #6f86d6;ß
}
`;
const resultItemAnime3 = keyframes`
0%{
  left:0;
  right:100%;
  background-color:#3549c9;
}
50%{
  left:0;
  right:0;
  background-color:#3549c9;
}
100%{
  left:100%;
  right:0;
  background-color: #3549c9;
}
`;

const resultItemFadeIn = keyframes`
0%{
  opacity:0;
}
50%{
  opacity:0;
}
100%{
  opacity:1;
}
`;
const resultList = css`
  padding: 0;
  margin: 0;
  & li:nth-of-type(1) > p {
    animation: ${resultItemFadeIn} 1s;
  }
  & li:nth-of-type(2) > p {
    animation: ${resultItemFadeIn} 1.6s;
  }
  & li:nth-of-type(3) > p {
    animation: ${resultItemFadeIn} 2.1s;
  }
`;

const resultItem = css`
  position: relative;
  margin-bottom: 2.5vh;
  font-size: 28px;
  list-style: none;
  text-align: center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
  }
  &:nth-of-type(1)&:after {
    animation: ${resultItemAnime} 1s;
  }
  &:nth-of-type(2)&:after {
    animation: ${resultItemAnime2} 1s 0.3s;
  }
  &:nth-of-type(3)&:after {
    animation: ${resultItemAnime3} 1s 0.6s;
  }
  &:nth-of-type(1) {
    color: #a6b1d9;
  }
  &:nth-of-type(2) {
    color: #6f86d6;
  }
  &:nth-of-type(3) {
    color: #3549c9;
    margin-bottom: 0px;
  }
  @media (max-height: 740px) {
    font-size: 24px;
  }
  @media (max-height: 740px) {
    font-size: 26px;
    margin-bottom: 3vh;
  }
`;

const resultText = css`
  margin: 0;
`;

const resultUnit = css`
  display: inline-block;
  margin-left: 2px;
  font-size: 1.6rem;
`;
