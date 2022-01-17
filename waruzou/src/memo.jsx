import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  const [perPerson, setPerPerson] = useState([]); //一人分の金額
  const [kirisute, setKirisute] = useState("");
  const [amari, setAmari] = useState("");

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
    let person = total / ppl;
    person = Math.trunc(person);
    const simo = Math.floor(person) % 100;
    console.log(simo);
    if (simo !== 0o0) {
      let person2 = total % ppl;
      console.log("下二桁が00ではありません");

      let kirisute = Math.floor(person / 100) * 100;
      let amari = simo * ppl + person2;
      setKirisute(kirisute);
      setAmari(amari);
      for (let i = 0; i < ppl; i++) {
        let kirisute = Math.floor(person / 100) * 100;
        let amari = simo * ppl + 1;
        console.log(amari);
        console.log(kirisute);
        perPerson.push(person);
      }

      console.log(kirisute);
      console.log(amari / 100);
    }
    // for (let i = 0; i < ppl; i++) {
    //   perPerson.push(person);
    // }
    setPerPerson([...perPerson]);
  };
  // console.log(perPerson);
  console.log(530 % 300);

  //下二桁を取得、百えん単位で割り勘する際に使う
  const aaa = 12345;
  const asas = Math.floor(aaa) % 100;
  // console.log(asas);
  if (asas !== 0o0) {
  }

  return (
    <div className="App">
      <input type="number" className="total" onChange={getValueFromTotal} />
      <input type="number" className="ppl" onChange={getValueFromPpl} />
      <button type="button" onClick={() => cal()}>
        計算する
      </button>
      {/* <output className="sum" name="price">
        一人当たり:{perPerson}
      </output> */}
      {perPerson &&
        perPerson.map((p, index) => {
          return <li key={index}>{p}</li>;
        })}
    </div>
  );
}

export default App;
