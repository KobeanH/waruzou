import { useState } from "react";
import { InputWrapper } from "../organism/InputWrapper";
import { Result } from "../organism/Result";
import { MainBtn } from "../atoms/btn/Mainbtn";
import { CalcResult } from "../atoms/title/CalcResult";
import { TotalState } from "../store/totalState";
import { PplState } from "../store/pplState";
import { CalculatedObjState } from "../store/calculatedObj";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

export const SplitMode = () => {
  const total = useRecoilValue(TotalState);
  const ppl = useRecoilValue(PplState);

  const [calculatedObj, setCalculatedObj] = useRecoilState(CalculatedObjState);

  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  // const [calculatedObj, setCalculatedObj] = useState({});
  const [aboutAmount, setAboutAmount] = useState(null);

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
      <InputWrapper />
      <CalcResult>計算結果</CalcResult>
      <Result
        total={total}
        ppl={ppl}
        perPerson={perPerson}
        aboutAmount={aboutAmount}
      />
      <MainBtn onClick={cal}>計算する</MainBtn>
    </>
  );
};
