import { useState } from "react";
import { css, keyframes } from "@emotion/css";

export const Result = (props) => {
  const { total, ppl, perPerson, calculatedObj, aboutAmounr } = props;

  return (
    <div className={result}>
      <div className={resultWrap}>
        <p className={aboutPerPerson}>
          一人あたり・・・
          {aboutAmounr && <span>{aboutAmounr}円</span>}
        </p>
        <span className={resulSuggest}>Suggest</span>
        <ul className={resultWrapUl}>
          {Object.keys(calculatedObj).map((key, value) => (
            <li className={resultItem} key={key}>
              <p className={resultWrapP}>
                <span className={resultItemText}>
                  {Object.keys(calculatedObj)[value]}
                  <span>円</span>
                </span>
                <span className={resultItemText}>・・・</span>
                <span className={resultItemText}>
                  {calculatedObj[key]}
                  <span>人</span>
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
const result = css`
  margin: 0 auto;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
`;
const aboutPerPerson = css`
  margin: 0 0 24px;
  padding: 0 0 16px 16px;
  text-align: center;
  border-bottom: 1px #808080 dotted;
  font-size: 20px;
  @media (max-height: 740px) {
    font-size: 16px;
    margin: 0 0 1.5vh;
    padding: 0 0 1.5vh 16px;
  }
`;
const resultItemTextAnime = keyframes`
0%{
 opacity:0;
}
50.1%{
 opacity:0;
}
100%{
 opacity:1;
}
`;
const resultWrapUl = css`
  padding: 0;
  margin: 0;
  & li:nth-of-type(1) > p {
    animation: ${resultItemTextAnime} 1s;
  }
  & li:nth-of-type(2) > p {
    animation: ${resultItemTextAnime} 1.6s;
  }
  & li:nth-of-type(3) > p {
    animation: ${resultItemTextAnime} 2.1s;
  }
`;
const resultWrapP = css`
  margin: 0;
`;

const resultWrap = css`
  height: 40vh;
  box-sizing: border-box;
  margin: 0 auto 3.5vh;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  padding: 16px 32px;

  @media (max-height: 740px) {
    height: 43vh;
    margin: 0 auto 3.5vh;
  }
`;
const resulSuggest = css`
display:inline-block;
  color;#3549C9;
padding:6px 24px;
background-color:#E5EAF6;
border-radius: 24px;
margin-bottom:3vh;
color:#3549c9;
  box-shadow: 0px 2px 9px #E5EAF6;
  font-size: 12px;
    @media (max-height: 740px) {
    padding:4px 24px;
    margin-bottom:3.5vh;
  }
`;

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
   background-color: #6f86d6;

}
100%{
  left:100%;
  right:0;
     background-color: #6f86d6;

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

const resultItem = css`
  list-style: none;
  text-align: center;
  margin-bottom: 2.5vh;
  font-size: 28px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
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

const resultItemText = css`
  display: inline-block;
  margin: 0px;
`;
