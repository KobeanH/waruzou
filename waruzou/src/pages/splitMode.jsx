import { useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { Game } from "../Game";
import { css, keyframes } from "@emotion/css";
import yen from "../img/yen.svg";
import person from "../img/user.svg";
import { Header } from "../templates/Header";
import { InputWrapper } from "../organism/InputWrapper";

export const SplitMode = () => {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  const [calculatedObj, setCalculatedObj] = useState({});
  const [gameBtn, setGameBtn] = useState(false);
  const [aboutAmounr, setAboutAmount] = useState(null);
  const [modeOn, setModeOn] = useState([true, false]);

  //合計金額入力欄
  const getValueFromTotal = (e) => {
    setTotal(() => e.target.value);
  };
  console.log(total);
  //人数入力欄
  const getValueFromPpl = (e) => {
    setPpl(() => e.target.value);
  };

  //計算をするボタン押した際に一人当たりの計算
  const cal = () => {
    let person = total / (ppl * 100);
    person = Math.trunc(person); //小数点以下切り捨て

    let remainder = total % (ppl * 100); //400 % 100 = あまり100
    let amount = [];
    //下二桁が"00"ではない時の処理
    if (remainder) {
      let hundred = Math.floor(remainder / 100); //百の桁取得(割り切れなかった百の順番に足すため)
      let twoDigits = remainder % 100; //下二桁取得

      //百の値をperPersonに格納
      for (let i = 0; i < ppl; i++) {
        amount.push(person);
      }

      //割り切れなかった余った百の値を順に足す処理
      for (let i = 0; i < hundred; i++) {
        amount[i] += 1;
      }

      //下二桁をもとに戻す
      for (let i = 0; i < ppl; i++) {
        amount[i] *= 100;
      }

      //下二桁を数字の低いものに足す処理
      let lowNumber = amount.reduce((a, b) => (a < b ? a : b)); //perPersonにある一番低い値取得
      let lowNumberFirst = amount.indexOf(lowNumber); //一番低い値の先頭を取得
      amount[lowNumberFirst] += twoDigits;
      setPerPerson(amount);

      //重複する金額を数え、CalculatedObjに格納
      let count = {};
      for (let i = 0; i < amount.length; i++) {
        let elm = amount[i];
        count[elm] = (count[elm] || 0) + 1;
      }
      setCalculatedObj(count);
    } else {
      //百の値をperPersonに格納
      for (let i = 0; i < ppl; i++) {
        amount.push(person);
      }
      //下二桁をもとに戻す
      for (let i = 0; i < ppl; i++) {
        amount[i] *= 100;
      }
      //重複する金額を数え、CalculatedObjに格納
      let count = {};
      for (let i = 0; i < amount.length; i++) {
        let elm = amount[i];
        count[elm] = (count[elm] || 0) + 1;
      }
      setCalculatedObj(count);
    }

    //一人あたりの金額表示
    let aboutAmount = total / ppl;
    aboutAmount = Math.trunc(aboutAmount);
    setAboutAmount(aboutAmount);
  };

  //モード切り替え
  const toggleMode = (index) => {
    let newModeOn = [false, false];
    newModeOn[index] = true;
    setModeOn(newModeOn);
  };

  return (
    <BrowserRouter>
      <Header />
      <div className={mainWrap}>
        <Switch>
          <Route exact path="/">
            <InputWrapper setTotal={setTotal} setPpl={setPpl} />
            <div className={result}>
              <span className={calcResult}>計算結果</span>
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
            <button className={mainBtn} type="button" onClick={() => cal()}>
              計算する
            </button>
          </Route>
          <Route exact path="/Game">
            <Game></Game>
          </Route>
        </Switch>
        <div className={modeWrap}>
          <Link
            onClick={() => toggleMode(0)}
            className={modeOn[0] == true ? modeOnn : modeOff}
            to="/"
          >
            {/* <img className={calcImg} src={calcImg} alt="split" /> */}
            <svg
              className={gameBtn === true ? calcImggg : calcImga}
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.1111 0H1.88889C0.85 0 0 0.85 0 1.88889V15.1111C0 16.15 0.85 17 1.88889 17H15.1111C16.15 17 17 16.15 17 15.1111V1.88889C17 0.85 16.15 0 15.1111 0ZM9.47278 3.83444L10.4739 2.83333L11.8056 4.165L13.1372 2.83333L14.1383 3.83444L12.8067 5.16611L14.1383 6.49778L13.1372 7.49889L11.8056 6.17667L10.4739 7.50833L9.47278 6.50722L10.8044 5.17555L9.47278 3.83444ZM3.06944 4.45778H7.79167V5.87444H3.06944V4.45778ZM8.02778 12.2778H6.13889V14.1667H4.72222V12.2778H2.83333V10.8611H4.72222V8.97222H6.13889V10.8611H8.02778V12.2778ZM14.1667 13.4583H9.44444V12.0417H14.1667V13.4583ZM14.1667 11.0972H9.44444V9.68056H14.1667V11.0972Z" />
            </svg>

            <span className={modeOn[0] == true ? hidden : show}>
              割り勘モード
            </span>
            {/* <span>割り勘モード</span> */}
          </Link>
          <Link
            onClick={() => toggleMode(1)}
            className={modeOn[1] == true ? modeOnn : modeOff}
            to="/game"
          >
            <svg
              className={gameBtn === true ? calcImggg : calcImga}
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.1863 11.09L18.0963 3.43C17.8163 1.46 16.1263 0 14.1363 0H5.07627C3.08627 0 1.39627 1.46 1.11627 3.43L0.0262663 11.09C-0.193734 12.63 0.996266 14 2.54627 14C3.22627 14 3.86627 13.73 4.34627 13.25L6.60627 11H12.6063L14.8563 13.25C15.3363 13.73 15.9863 14 16.6563 14C18.2163 14 19.4063 12.63 19.1863 11.09ZM8.60627 6H6.60627V8H5.60627V6H3.60627V5H5.60627V3H6.60627V5H8.60627V6ZM12.6063 5C12.0563 5 11.6063 4.55 11.6063 4C11.6063 3.45 12.0563 3 12.6063 3C13.1563 3 13.6063 3.45 13.6063 4C13.6063 4.55 13.1563 5 12.6063 5ZM14.6063 8C14.0563 8 13.6063 7.55 13.6063 7C13.6063 6.45 14.0563 6 14.6063 6C15.1563 6 15.6063 6.45 15.6063 7C15.6063 7.55 15.1563 8 14.6063 8Z" />
            </svg>
            <span className={modeOn[1] == true ? hidden : show}>
              割り勘モード
            </span>
            {gameBtn && <span>ゲームモード</span>}
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
};
const show = css`
  overflow: hidden;
  display: none;
  transition: all 1s;
  position: absolute;
  right: -90px;
`;
const hidden = css`
  display: inline-block;
  overflow: hidden;
  transition: all 1s;
`;

const mainWrap = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;
const amountImg = css`
  margin: 12px 10px 6px;
  @media (max-height: 740px) {
    width: 18px;
  }
`;
const inputWrapper = css`
  &:nth-child(1) {
    margin-bottom: 3.5vh;
  }
  @media (max-height: 740px) {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    &:nth-child(1) {
      margin-bottom: 2vh;
    }
  }
`;
const inputWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  @media (max-height: 740px) {
    margin-bottom: 0.5vh;
  }
  @media (max-height: 740px) {
    margin-bottom: 1vh;
    width: 100%;
    gap: 4px;
  }
`;
const personImg = css`
  margin: 10px 10px 8px;
  @media (max-height: 740px) {
    width: 18px;
  }
`;
const amountSpan = css`
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 1s;
`;
const amountSpanOn = css`
  display: inline-block;
  background-color: #e5eaf6;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 1s;
`;
const amountInput = css`
  font-size: 16px;
  width: 100%;
  padding: 1.5vh 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #808080;
  &::placeholder {
    color: rgba(128, 128, 128, 0.65);
  }
  @media (max-height: 740px) {
    width: 100%;
    font-size: 16px;
    padding: 1.5vh 8px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
const result = css`
  margin: 0 auto;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
`;
const calcResult = css`
  display: inline-block;
  color: #808080;
  padding: 6px 24px;
  border-radius: 20px;
  text-align: center;
  background-color: #fff;
  vertical-align: middle;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  margin-bottom: 16px;
  margin-left: 32px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  font-size: 12px;
  @media (max-height: 740px) {
    margin-bottom: 1.5vh;
  }
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

const mainBtn = css`
  display: block;
  max-width: 200px;
  width: 100%;
  background-color: #6f86d6;
  color: #fff;
  padding: 12px;
  margin: 0 auto 3.5vh;
  border-radius: 100px;
  border: none;
  box-shadow: 0px 4px 4px #808080;
  transition: all 0.3s;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    transition: all 0.3s;
  }
  &:hover resultItem {
    color: red;
    margin-bottom: 3vh;
  }
`;

const modeWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
`;

const modeOnn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  // display: inline-block;
  gap: 16px;
  color: #3549c9;
  background-color: #e5eaf6;
  border-radius: 36px;
  padding: 12px;
  max-width: 220px;
  width: 100%;
  box-shadow: 0px 1px 7px rgba(229, 234, 246, 1);
  text-decoration: none;
  transition: all 1s;
  overflow: hidden;
  white-space: nowrap;

  // &:after {
  //   content: "割り勘モード";
  //   display: inline-block;
  //   overflow: hidden;
  //   width: 100px;
  // }
  > svg {
    fill: #3549c9;
  }
`;
const modeOff = css`
  position: relative;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  color: #3549c9;
  background-color: rgba(128, 128, 128, 0.25);
  border-radius: 36px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  text-decoration: none;
  transition: all 1s;
  box-sizing: border-box;
  width: 52px;
  // overflow: hidden;
  height: 52px;
  > svg {
    fill: #808080;
  }
`;
const calcImga = css`
  fill: #808080;
`;
const calcImggg = css`
  fill: #3549c9;
`;
