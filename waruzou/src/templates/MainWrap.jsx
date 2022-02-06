import { Route, Switch } from "react-router-dom";
import { Game } from "../Game";
import { css } from "@emotion/css";
import { SplitMode } from "../pages/splitMode";
import { ChangeMode } from "../templates/ChangeMode";

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
      <ChangeMode />
    </div>
  );
};

const mainWrap = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;
