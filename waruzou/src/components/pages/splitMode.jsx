import { css } from "@emotion/css";
import { useRecoilState, useRecoilValue } from "recoil";

import { AnnounceText } from "../atoms/text/AnnounceText";
import { InputWrapper } from "../organism/InputWrapper";
import { SplitResult } from "../organism/SplitResult";
import { MainBtn } from "../atoms/btn/MainBtn";
import { AmountState } from "../store/amountState";
import { NumPplState } from "../store/NumPplState";
import { AboutAmountState } from "../store/AboutAmountState";
import { CalculatedObjState } from "../store/calculatedObj";
import { ShowAnnounceState } from "../store/ShowAnnounceState";
import { useState } from "react";

export const SplitMode = () => {
  const amount = useRecoilValue(AmountState);
  const numPpl = useRecoilValue(NumPplState);
  const [calculatedObj, setCalculatedObj] = useRecoilState(CalculatedObjState);
  const [aboutAmount, setAboutAmount] = useRecoilState(AboutAmountState);
  const [showAnnounce, setShowAnnounce] = useRecoilState(ShowAnnounceState);
  const [showSplitResult, setShowSplitResult] = useState(false);

  let perPerson = amount / (numPpl * 100); //百以下の位以外を計算
  perPerson = Math.trunc(perPerson); //小数点以下切り捨て

  let remainder = amount % (numPpl * 100); //割り切れない百以下の値を取得

  let amountArray = [];

  let remainderNumHundred = Math.floor(remainder / 100); //百の桁取得(割り切れなかった百の順番に足すため)

  let lastTwoDigits = remainder % 100; //下二桁取得

  const calculate = () => {
    //金額と人数が入力されている場合の処理
    if (amount && numPpl) {
      //割り切れる百以上の値をamountArrayに格納
      for (let i = 0; i < numPpl; i++) {
        amountArray.push(perPerson);
      }

      //割り切れなかった余りの百の値を順に足す処理
      for (let i = 0; i < remainderNumHundred; i++) {
        amountArray[i] += 1;
      }

      //下二桁をもとに戻す
      for (let i = 0; i < numPpl; i++) {
        amountArray[i] *= 100;
      }

      //下二桁をamountArrayの中で一番値の低いものに足す処理
      let lowestNumber = amountArray.reduce((a, b) => (a < b ? a : b)); //perPersonにある一番低い値取得
      let lowestNumberFirst = amountArray.indexOf(lowestNumber); //一番低い値の先頭のindexを取得
      amountArray[lowestNumberFirst] += lastTwoDigits; //一番低い値の一番目に余りの下二桁を足す

      //三桁単位でカンマ区切り
      amountArray = amountArray.map((amount) => amount.toLocaleString());

      //重複する金額を数え、CalculatedObjに格納
      let countObj = {};
      for (let i = 0; i < amountArray.length; i++) {
        let index = amountArray[i];
        countObj[index] = (countObj[index] || 0) + 1;
      }
      setCalculatedObj(countObj);

      //一人あたりの金額表示
      let aboutAmount = amount / numPpl;
      aboutAmount = Math.trunc(aboutAmount); //小数点以下切り捨て
      aboutAmount = aboutAmount.toLocaleString(); //三桁単位でカンマ区切り
      setAboutAmount(aboutAmount);

      setShowAnnounce(false);
      setShowSplitResult(true);
    } else {
      alert("金額と人数を入力してください");
    }
  };

  return (
    <>
      <AnnounceText>金額と人数を入力してください</AnnounceText>
      <InputWrapper />
      {showSplitResult && <SplitResult aboutAmount={aboutAmount} />}
      <MainBtn mainBtnPosition={mainBtnPosition} onClick={calculate}>
        計算する
      </MainBtn>
    </>
  );
};

const mainBtnPosition = css`
  position: fixed;
  left: 50%;
  bottom: 70px;
  transform: translate(-50%, -50%);
  @media (max-height: 553px) {
    bottom: 65px;
  }
  @media (min-width: 430px) {
    bottom: 12vh;
  }
`;
