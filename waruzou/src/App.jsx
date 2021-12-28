import "./App.css";

function App() {
  return (
    <div className="App">
      <input type="number" className="total" value="0" />
      <input type="number" className="num_ppl" value="0" />
      <button className="as" type="button">
        計算する
      </button>
      <output className="sum" name="price">
        一人当たり
      </output>
    </div>
  );
}

let total_inp = document.querySelector(".total");
let num_ppl_inp = document.querySelector(".num_ppl");
let price = document.querySelector(".sum");
let as = document.querySelector(".as");

// console.addEventListener("click", () => {
//   let fin = total_inp / num_ppl_inp;
//   price.value = fin;
// });

as.onclick = () => {
  let fin = total_inp / num_ppl_inp;
  price.value = fin;
  console.log("aaa");
};

export default App;
