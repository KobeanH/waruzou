import { BrowserRouter } from "react-router-dom";
import { Header } from "./templates/Header";
import { MainWrap } from "./templates/MainWrap";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainWrap />
    </BrowserRouter>
  );
}

export default App;
