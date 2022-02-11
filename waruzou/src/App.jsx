import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Header } from "./organism/Header";
import { MainContent } from "./templates/MainContent";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Header />
        <MainContent />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
