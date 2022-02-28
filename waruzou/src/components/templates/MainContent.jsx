import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { SplitMode } from "../pages/SplitMode";
import { GameMode } from "../pages/GameMode";
import { ChangeMode } from "../organism/ChangeMode";
import { RouletteMode } from "../pages/RouletteMode";
import { ShowState } from "../store/showState";
import { StartAnime } from "../pages/StartAnime";

export const MainContent = () => {
  const [showAnime, setShowAnime] = useState(true);
  const show = useRecoilValue(ShowState);

  setTimeout(() => {
    setShowAnime(false);
  }, 3500);

  return (
    <main className={mainContent}>
      <div className={mainContentWrap}>
        <Switch>
          <Route exact path="/">
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
  max-height: 524px;
  height: 100%;
  width: 100vw;
  padding: 16px 20px;
  border-radius: 30px 30px 0 0;
  background-color: #fff;
  box-sizing: border-box;
  &:before {
    content: "";
    position: fixed;
    top: 16%;
    right: 110px;
    z-index: -1;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.25);
  }
  @media (max-height: 553px) {
    max-height: 464px;
  }
  @media (min-width: 430px) {
    max-height: 75vh;
    padding: 48px;
  }
`;
const mainContentWrap = css`
  @media (min-width: 430px) {
    max-width: 375px;
    margin: 0 auto;
  }
`;
