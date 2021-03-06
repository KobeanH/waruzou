import { memo } from "react";
import { css, keyframes } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { CalculatedObjState } from "../../store/calculatedObj";
import { Color } from "../../utility/Color";

export const ResultList = memo(() => {
  const calculatedObj = useRecoilValue(CalculatedObjState);

  return (
    <ul className={resultList}>
      {Object.keys(calculatedObj).map((key, value) => (
        <li className={resultItem} key={key}>
          <p className={resultText}>
            {Object.keys(calculatedObj)[value]}
            <span className={resultUnit}>円</span>
            ・・・
            {calculatedObj[key]}
            <span className={resultUnit}>人</span>
          </p>
        </li>
      ))}
    </ul>
  );
});

const baseResultItemAnime = keyframes`
0%{
  left:0;
  right:100%;
  background-color: var(--back-color);
}
50%{
  left:0;
  right:0;
  background-color: var(--back-color);
}
100%{
  left:100%;
  right:0;
  background-color: var(--back-color);
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
    will-change: animation;
  }
  & li:nth-of-type(2) > p {
    animation: ${resultItemFadeIn} 1.6s;
    will-change: animation;
  }
  & li:nth-of-type(3) > p {
    animation: ${resultItemFadeIn} 2.1s;
    will-change: animation;
  }
`;

const resultItem = css`
  position: relative;
  margin-bottom: 2.8vh;
  font-size: 2.8rem;
  text-align: center;
  list-style: none;
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
    --back-color: ${Color.subColor};
    animation: ${baseResultItemAnime} 1s;
    will-change: animation;
  }
  &:nth-of-type(2)&:after {
    --back-color: ${Color.secondSubColor};
    animation: ${baseResultItemAnime} 1s 0.3s;
    will-change: $animation;
  }
  &:nth-of-type(3)&:after {
    --back-color: ${Color.mainColor};
    animation: ${baseResultItemAnime} 1s 0.6s;
    will-change: $animation;
  }
  &:nth-of-type(1) {
    color: ${Color.subColor};
  }
  &:nth-of-type(2) {
    color: ${Color.secondSubColor};
  }
  &:nth-of-type(3) {
    color: ${Color.mainColor};
    margin-bottom: 0px;
  }
  @media (max-height: 740px) {
    font-size: 2.4rem;
  }
  @media (max-height: 553px) {
    font-size: 2.6rem;
    margin-bottom: 10px;
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
