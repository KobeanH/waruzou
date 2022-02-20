import Div100vh from "react-div-100vh";
import { RecoilRoot } from "recoil";
import { HashRouter } from "react-router-dom";

import { Header } from "./components/organism/Header";
import { MainContent } from "./components/templates/MainContent";

function App() {
  return (
    <Div100vh>
      <RecoilRoot>
        <HashRouter>
          <Header />
          <MainContent />
        </HashRouter>
      </RecoilRoot>
    </Div100vh>
  );
}

export default App;
