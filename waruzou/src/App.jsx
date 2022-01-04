import { useEffect, useState } from "react";

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

  return (
    <div className="App">
      <input type="number" className="total" onChange={handleChange} />
      <input type="number" className="ppl" onChange={handleChange2} />
      <button className="as" type="button" onClick={cal}>
        計算する
      </button>
      <output className="sum" name="price">
        一人当たり:{fin}
      </output>
    </div>
  );
}

export default App;
