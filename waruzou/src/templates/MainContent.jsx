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
  const [showAnime, setShowAnime] = useState(true);
  setTimeout(() => {
    setShowAnime(false);
  }, 3500);
  return (
    <main className={mainContent}>
      <div className={mainContentWrap}>
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
        {showAnime && <StartAnime />}
      </div>
    </main>
  );
};

const mainContent = css`
  position: fixed;
  bottom: 0;
  height: 77vh;
  width: 100vw;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  &:before {
    content: "";
    position: fixed;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.25);
    top: 140px;
    right: 110px;
    z-index: -1;
  }
`;
const mainContentWrap = css`
  // position: relative;
  // margin: 0 auto;
`;
