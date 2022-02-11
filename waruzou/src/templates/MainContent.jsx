import { Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";

import { SplitMode } from "../pages/splitMode";
import { GameMode } from "../pages/GameMode";
import { ChangeMode } from "../organism/ChangeMode";
import { useRecoilValue } from "recoil";
import { showState } from "../store/showState";

export const MainContent = () => {
  const show = useRecoilValue(showState);
  return (
    <main className={mainContent}>
      <Switch>
        <Route exact path="/">
          <SplitMode />
        </Route>
        <Route exact path="/Game">
          <GameMode></GameMode>
        </Route>
      </Switch>
      {show && <ChangeMode />}
    </main>
  );
};

const mainContent = css`
  max-width: 375px;
  margin: 0 auto;
  padding: 0 20px;
`;
