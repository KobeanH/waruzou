import { Route, Switch } from "react-router-dom";
import { css } from "@emotion/css";

import { SplitMode } from "../pages/splitMode";
import { GameMode } from "../pages/GameMode";

export const MainContent = () => {
  return (
    <div className={mainContent}>
      <Switch>
        <Route exact path="/">
          <SplitMode />
        </Route>
        <Route exact path="/Game">
          <GameMode></GameMode>
        </Route>
      </Switch>
    </div>
  );
};

const mainContent = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;
