import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [perPerson, setPerPerson] = useState(""); //一人分の金額

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
    let perPerson = total / ppl;
    perPerson = Math.trunc(perPerson);
    setPerPerson(perPerson);
    console.log(Math.trunc(perPerson));
  };

  //下二桁を取得、百えん単位で割り勘する際に使う
  const aaa = 12345;
  const asas = Math.floor(aaa) % 100;
  console.log(asas);
  if (asas !== 0o0) {
  }

  //人数に応じて表示するリストを生成
  let person = [];
  const roop = () => {
    for (let i = 0; i < 4; i++) {
      person.push(<li key={i}>ss</li>);
    }
  };
  roop();
  console.log(person);

  return (
    <div className="App">
      <input type="number" className="total" onChange={getValueFromTotal} />
      <input type="number" className="ppl" onChange={getValueFromPpl} />
      <button type="button" onClick={cal}>
        計算する
      </button>
      {/* <output className="sum" name="price">
        一人当たり:{perPerson}
      </output> */}
      {person}
    </div>
  );
}

export default App;

// useEffect(() => {
//   console.log(total);
// }, [total]);
// useEffect(() => {
//   console.log(ppl);
// }, [ppl]);
