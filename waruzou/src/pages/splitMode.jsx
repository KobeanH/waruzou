import { useState } from "react";
import { css } from "@emotion/css";
import { InputWrapper } from "../organism/InputWrapper";
import { Result } from "../organism/Result";

export const SplitMode = () => {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数

  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  const [calculatedObj, setCalculatedObj] = useState({});
  const [aboutAmounr, setAboutAmount] = useState(null);

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

  return (
    <>
      <InputWrapper setTotal={setTotal} setPpl={setPpl} />
      <span className={calcResult}>計算結果</span>
      <Result
        total={total}
        ppl={ppl}
        perPerson={perPerson}
        calculatedObj={calculatedObj}
        aboutAmounr={aboutAmounr}
      />
      <button className={mainBtn} type="button" onClick={() => cal()}>
        計算する
      </button>
    </>
  );
};

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
