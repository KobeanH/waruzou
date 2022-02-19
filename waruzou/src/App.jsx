import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import { Header } from "./organism/Header";
import { MainContent } from "./templates/MainContent";

function App() {
  return (
    <RecoilRoot>
      <HashRouter>
        <Header />
        <MainContent />
      </HashRouter>
    </RecoilRoot>
  );
}

export default App;
