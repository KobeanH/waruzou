import { useState } from "react";
import { css } from "@emotion/css";
import yen from "../img/yen.svg";
import person from "../img/user.svg";

export const InputWrapper = () => {
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
    <div className={inputWrapper}>
      <div className={inputWrap}>
        <span className={total == true ? amountSpanOn : amountSpan}>
          <img className={amountImg} src={yen} alt="yen" />
        </span>
        <input
          className={amountInput}
          placeholder="金額"
          type="tel"
          onChange={getValueFromTotal}
          maxLength="8"
        />
      </div>
      <div className={inputWrap}>
        <span className={ppl == true ? amountSpanOn : amountSpan}>
          <img className={personImg} src={person} alt="person" />
        </span>
        <input
          placeholder="人数"
          type="tel"
          className={amountInput}
          onChange={getValueFromPpl}
          maxLength="3"
        />
      </div>
    </div>
  );
};

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
