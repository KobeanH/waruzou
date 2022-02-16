import { Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";

import { SplitMode } from "../pages/splitMode";
import { GameMode } from "../pages/GameMode";
import { ChangeMode } from "../organism/ChangeMode";
import { useRecoilValue } from "recoil";
import { showState } from "../store/showState";
import { RouletteMode } from "../pages/RouletteMode";
import { StartAnime } from "../pages/StartAnime";
import { useState } from "react";

export const MainContent = () => {
  const show = useRecoilValue(showState);
  const [aaa, setAaa] = useState(true);
  setTimeout(() => {
    setAaa(false);
  }, 3500);
  return (
    <main className={mainContent}>
      <Switch>
        <Route exact path="/build//">
          <SplitMode />
        </Route>
        <Route path="/game/">
          <GameMode />
        </Route>
        <Route path="/roulette/">
          <RouletteMode />
        </Route>
      </Switch>
      {show && <ChangeMode />}
      {aaa && <StartAnime />}
    </main>
  );
};

const mainContent = css`
  position: relative;
  height: 60vh;
  max-width: 375px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
`;
