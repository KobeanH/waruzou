import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Header } from "./templates/Header";
import { MainWrap } from "./templates/MainWrap";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <MainWrap />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
