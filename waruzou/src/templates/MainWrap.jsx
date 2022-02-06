import { Route, Switch } from "react-router-dom";
import { Game } from "../pages/Game";
import { css } from "@emotion/css";
import { SplitMode } from "../pages/splitMode";

export const MainWrap = () => {
  return (
    <div className={mainWrap}>
      <Switch>
        <Route exact path="/">
          <SplitMode />
        </Route>
        <Route exact path="/Game">
          <Game></Game>
        </Route>
      </Switch>
    </div>
  );
};

const mainWrap = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;
