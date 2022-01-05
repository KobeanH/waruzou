import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState("");
  const [ppl, setPpl] = useState("");
  const [fin, setFin] = useState("");

  useEffect(() => {
    console.log(total);
  }, [total]);
  useEffect(() => {
    console.log(ppl);
  }, [ppl]);

  const handleChange = (e) => {
    setTotal(() => e.target.value);
  };
  const handleChange2 = (e) => {
    setPpl(() => e.target.value);
  };
  const cal = () => {
    let fin = total / ppl;
    fin = Math.trunc(fin);
    setFin(fin);
    console.log(Math.trunc(fin));
  };

  const aaa = 12345;
  const asas = Math.floor(aaa) % 100;
  console.log(asas);

  if (asas !== 0o0) {
  }

  let person = [];
  let roop = () => {
    for (let i = 0; i < 3; i++) {
      person.push();
    }
  };

  roop();a

  console.log(person);
  return (
    <div className="App">
      <input type="number" className="total" onChange={handleChange} />
      <input type="number" className="ppl" onChange={handleChange2} />
      <button className="as" type="button" onClick={(cal, roop)}>
        計算する
      </button>
      {/* <output className="sum" name="price">
        一人当たり:{fin}
      </output> */}
      {person.map((p) => {
        return (
          <output className="sum" name="price" key={}>
            一人当たり:{fin}
          </output>
        );
      })}
    </div>
  );
}

export default App;
