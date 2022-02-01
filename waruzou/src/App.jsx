import { useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { Game } from "./Game";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  const [calculatedObj, setCalculatedObj] = useState({});

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
  };
  return (
    <BrowserRouter>
      <Link to="/">ホームに戻る</Link>
      <Link to="/Game">ゲームをする</Link>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <input
              type="number"
              className="total"
              onChange={getValueFromTotal}
            />
            <input type="number" className="ppl" onChange={getValueFromPpl} />
            <button type="button" onClick={() => cal()}>
              計算する
            </button>
            {Object.keys(calculatedObj).map((key, value) => (
              <li key={key}>
                {Object.keys(calculatedObj)[value]} + {calculatedObj[key]}
              </li>
            ))}
          </div>
        </Route>
        <Route exact path="/Game">
          <Game></Game>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
