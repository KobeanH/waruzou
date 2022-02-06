import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Header } from "./templates/Header";
import { MainWrap } from "./templates/MainWrap";
import { ChangeMode } from "./templates/ChangeMode";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <MainWrap />
        <ChangeMode />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
