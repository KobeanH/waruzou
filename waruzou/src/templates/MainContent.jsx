import { Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";

import { SplitMode } from "../pages/splitMode";
import { GameMode } from "../pages/GameMode";
import { ChangeMode } from "../organism/ChangeMode";
import { useRecoilValue } from "recoil";
import { showState } from "../store/showState";
import { RouletteMode } from "../pages/RouletteMode";

export const MainContent = () => {
  const show = useRecoilValue(showState);
  return (
    <main className={mainContent}>
      <Switch>
        <Route exact path="/">
          <SplitMode />
        </Route>
        <Route exact path="/Game">
          <GameMode />
        </Route>
        <Route exact path="/Roulette">
          <RouletteMode />
        </Route>
      </Switch>
      {show && <ChangeMode />}
    </main>
  );
};

const mainContent = css`
  position: relative;
  height: 60vh;
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
`;
