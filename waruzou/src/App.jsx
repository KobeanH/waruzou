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
  let person = [];
  const cal = () => {
    let perPerson = total / ppl;
    perPerson = Math.trunc(perPerson);
    setPerPerson(perPerson);
    console.log(perPerson);
    let person = [];
    for (let i = 0; i < ppl; i++) {
      person.push(perPerson);
      console.log(person);
      return person;
    }
  };
  console.log(person);

  //下二桁を取得、百えん単位で割り勘する際に使う
  const aaa = 12345;
  const asas = Math.floor(aaa) % 100;
  // console.log(asas);
  if (asas !== 0o0) {
  }

  //人数に応じて表示するリストを生成
  // let person = [];
  // const roop = () => {
  //   for (let i = 0; i < ppl; i++) {
  //     person.push(<li key={i}>{perPerson}</li>);
  //   }
  // };
  // roop();
  // console.log(person);

  const members = ["Araki", "Ibata", "Fukutome", "Woods", "Alex", "Tatsunami"];

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
      {/* {person} */}
      {person &&
        person.map((p, index) => {
          return <li key={index}>{p}fff</li>;
          // return `${index + 1}番目は${person}`;
        })}
      {/* {members.map((output, index) => {
        return `${index + 1}番目は${output}`;
      })}
      ; */}
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
