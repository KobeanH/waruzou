import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Header } from "./organism/Header";
import { MainContent } from "./templates/MainContent";
import { ChangeMode } from "./organism/ChangeMode";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <MainContent />
        <ChangeMode />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
