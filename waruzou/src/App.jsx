import { useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Game } from "./Game";
import { jsx, css } from "@emotion/css";
import yen from "./img/yen.svg";
import person from "./img/user.svg";
import calcImg from "./img/warican.svg";
import gameIcon from "./img/gameIcon.svg";
import logoIcon from "./img/logoIcon.svg";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  const [calculatedObj, setCalculatedObj] = useState({});
  const [modeBtn, setModeBtn] = useState(true);
  const [gameBtn, setGameBtn] = useState(false);
  const [aboutAmounr, setAboutAmount] = useState(null);
  const [modeOn, setModeOn] = useState([false, false]);

  //合計金額入力欄
  const getValueFromTotal = (e) => {
    setTotal(() => e.target.value);
  };
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
  console.log(modeOn);
  // newItems[index] = { ...items[index], amount: value };

  return (
    <BrowserRouter>
      <div className={app}>
        <header className={header}>
          <div className={headerTtlWrap}>
            <img className={headerTtlLogo} src={logoIcon} alt="logo" />
            <h2 className={headerTtl}>
              わり<span className={headerTtlEn}>Can</span>
            </h2>
          </div>
        </header>
        <div className={mainWrap}>
          <Switch>
            <Route exact path="/">
              <div>
                <div className={inputWrap}>
                  <span className={amountSpan}>
                    <img className={amountImg} src={yen} alt="yen" />
                  </span>
                  <input
                    className={amountInput}
                    placeholder="金額を入力してください"
                    type="number"
                    onChange={getValueFromTotal}
                  />
                </div>
                <div className={inputWrap}>
                  <span className={amountSpan}>
                    <img className={personImg} src={person} alt="person" />
                  </span>
                  <input
                    placeholder="人数を入力してください"
                    type="number"
                    className={amountInput}
                    onChange={getValueFromPpl}
                  />
                </div>
              </div>
              <div className={result}>
                <span className={calcResult}>計算結果</span>
                <div className={resultWrap}>
                  <p className={aboutPerPerson}>
                    一人あたり・・・
                    {aboutAmounr && <span>{aboutAmounr}円</span>}
                  </p>
                  <span className={resulSuggest}>Suggest</span>
                  {Object.keys(calculatedObj).map((key, value) => (
                    <li className={resultItem} key={key}>
                      <p className={resultItemText}>
                        {Object.keys(calculatedObj)[value]}
                        <span>円</span>
                      </p>
                      ・・・
                      <p className={resultItemText}>
                        {calculatedObj[key]}
                        <span>人</span>
                      </p>
                    </li>
                  ))}
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
              <img className={calcImg} src={calcImg} alt="split" />
              <span className={modeOn[0] == true ? hidden : show}>
                割り勘モード
              </span>
              {/* <span>割り勘モード</span> */}
            </Link>
            <Link className={gameBtn === true ? gameMode : modeOff} to="/Game">
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
              {gameBtn && <span>ゲームモード</span>}
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
const show = css`
  transition: all 5s;
  clip-path: inset(0 100% 0 0);
  display: none;
  opacity: 1;
`;
const hidden = css`
  display: initial;
  opacity: 0,
  transition: all 5s;
`;
const app = css`
  color: #808080;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
`;
const mainWrap = css`
  max-width: 400px;
  margin: 0 auto;
`;
const header = css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(#6f86d6, #90a9ff);
  height: 120px;
  border-radius: 0 0 48px 48px;
  margin-bottom: 40px;
`;
const headerTtlWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 54px;
  background-color: #fff;
  max-width: 240px;
  width: 100%;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
`;
const headerTtl = css`
  color: #6f86d6;
  font-size: 32px;
`;
const headerTtlEn = css`
  color: #ffc56f;
`;
const headerTtlLogo = css`
  width: 24px;
`;
const amountImg = css`
  margin: 12px 10px 6px;
`;
const personImg = css`
  margin: 10px 10px 8px;
`;
const amountSpan = css`
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
`;
const amountInput = css`
  font-size: 16px;
  max-width: 280px;
  width: 280px;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #808080;
  &::placeholder {
    color: rgba(128, 128, 128, 0.65);
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
`;
const aboutPerPerson = css`
  margin: 0 0 24px;
  padding: 0 0 16px 16px;
  text-align: center;
  border-bottom: 1px #808080 dotted;
  font-size: 20px;
`;
const resultWrap = css`
  height: 382px;
  box-sizing: border-box;
  margin: 0 auto 32px;
  border-radius: 24px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  padding: 16px 32px;
`;
const resulSuggest = css`
display:inline-block;
  color;#3549C9;
padding:6px 24px;
background-color:#E5EAF6;
border-radius: 24px;
margin-bottom:24px;
  box-shadow: 0px 2px 9px #E5EAF6;
`;
const resultItem = css`
  list-style: none;
  text-align: center;
  margin-bottom: 32px;
  font-size: 36px;
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
`;

const resultItemText = css`
  display: inline-block;
  margin: 0px;
`;
const resultItemAmount = css`
  list-style: none;
  text-align: center;
  margin-bottom: 32px;
`;
const resultItemPerson = css`
  list-style: none;
  text-align: center;
  margin-bottom: 32px;
`;

const mainBtn = css`
  display: block;
  max-width: 200px;
  width: 100%;
  background-color: #6f86d6;
  color: #fff;
  padding: 12px;
  margin: 0 auto 32px;
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
  gap: 16px;
  color: #3549c9;
  background-color: #e5eaf6;
  border-radius: 36px;
  padding: 12px;
  max-width: 220px;
  width: 100%;
  box-shadow: 0px 1px 7px rgba(229, 234, 246, 1);
  text-decoration: none;
  transition: all 5s;
`;
const gameMode = css`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
const modeOff = css`
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
`;
const calcImga = css`
  fill: #808080;
`;
const calcImggg = css`
  fill: #3549c9;
`;
const inputWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
`;

export default App;
