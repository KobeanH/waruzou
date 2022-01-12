import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState(""); //合計金額
  const [ppl, setPpl] = useState(""); //人数
  let [perPerson, setPerPerson] = useState([]); //一人分の金額
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
    let person = total / (ppl * 100);
    person = Math.trunc(person); //400 / 300 = 1

    let amari = total % (ppl * 100); //400 % 100 = あまり100
    if (amari) {
      let hyaku = Math.floor(amari / 100); //百の桁取得
      let simo = amari % 100; //十以下の桁取得
      console.log(hyaku);
      let per = [];
      for (let i = 0; i < ppl; i++) {
        perPerson.push(person);
      }
      for (let i = 0; i < hyaku; i++) {
        perPerson[i] += 1;
      }
      console.log(perPerson);
      // let kirisute = Math.floor(person / 100) * 100;
      // let amari = simo * ppl + person2;
      // setKirisute(kirisute);
      // setAmari(amari);
      // for (let i = 0; i < ppl; i++) {
      //   let kirisute = Math.floor(person / 100) * 100;
      //   let amari = simo * ppl + 1;
      //   console.log(amari);
      //   console.log(kirisute);
      //   perPerson.push(person);
      // }
    }
  };

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
