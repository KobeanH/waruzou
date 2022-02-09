import { useState } from "react";
import { css } from "@emotion/css";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

import { InputWrapper } from "../organism/InputWrapper";
import { Result } from "../organism/Result";
import { MainBtn } from "../atoms/btn/Mainbtn";
import { CalcResult } from "../atoms/title/CalcResult";
import { AmountState } from "../store/amountState";
import { PplState } from "../store/pplState";
import { CalculatedObjState } from "../store/calculatedObj";

export const SplitMode = () => {
  const amount = useRecoilValue(AmountState);
  const ppl = useRecoilValue(PplState);

  const [calculatedObj, setCalculatedObj] = useRecoilState(CalculatedObjState);
  const [aboutAmount, setAboutAmount] = useState(null);

  const calculate = () => {
    if (amount && ppl) {
      let person = amount / (ppl * 100);
      person = Math.trunc(person); //小数点以下切り捨て

      let remainder = amount % (ppl * 100); //400 % 100 = あまり100
      let amountArray = [];
      //下二桁が"00"ではない時の処理
      if (remainder) {
        let hundred = Math.floor(remainder / 100); //百の桁取得(割り切れなかった百の順番に足すため)
        let twoDigits = remainder % 100; //下二桁取得

        //百の値をperPersonに格納
        for (let i = 0; i < ppl; i++) {
          amountArray.push(person);
        }

        //割り切れなかった余った百の値を順に足す処理
        for (let i = 0; i < hundred; i++) {
          amountArray[i] += 1;
        }

        //下二桁をもとに戻す
        for (let i = 0; i < ppl; i++) {
          amountArray[i] *= 100;
        }

        //下二桁を数字の低いものに足す処理
        let lowNumber = amountArray.reduce((a, b) => (a < b ? a : b)); //perPersonにある一番低い値取得
        let lowNumberFirst = amountArray.indexOf(lowNumber); //一番低い値の先頭を取得
        amountArray[lowNumberFirst] += twoDigits;

        //重複する金額を数え、CalculatedObjに格納
        let count = {};
        for (let i = 0; i < amountArray.length; i++) {
          let elm = amountArray[i];
          count[elm] = (count[elm] || 0) + 1;
        }
        setCalculatedObj(count);
      } else {
        //百の値をperPersonに格納
        for (let i = 0; i < ppl; i++) {
          amountArray.push(person);
        }
        //下二桁をもとに戻す
        for (let i = 0; i < ppl; i++) {
          amountArray[i] *= 100;
        }
        //重複する金額を数え、CalculatedObjに格納
        let count = {};
        for (let i = 0; i < amountArray.length; i++) {
          let elm = amountArray[i];
          count[elm] = (count[elm] || 0) + 1;
        }
        setCalculatedObj(count);
      }

      //一人あたりの金額表示
      let aboutAmount = amount / ppl;
      aboutAmount = Math.trunc(aboutAmount);
      setAboutAmount(aboutAmount);
    } else {
      alert("金額と人数を入力してください");
    }
  };

  return (
    <>
      <InputWrapper />
      <CalcResult>計算結果</CalcResult>
      <Result amount={amount} ppl={ppl} aboutAmount={aboutAmount} />
      <MainBtn mainBtnPosition={mainBtnPosition} onClick={calculate}>
        計算する
      </MainBtn>
    </>
  );
};
const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 11vh;
  transform: translate(-50%, -50%);
`;
