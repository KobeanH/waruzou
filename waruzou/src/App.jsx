import { useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { Game } from "./Game";
import { css } from "@emotion/css";
import { Header } from "./templates/Header";
import { SplitMode } from "./pages/splitMode";
import { ChangeMode } from "./templates/ChangeMode";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
    </BrowserRouter>
  );
}

const mainWrap = css`
  max-width: 400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default App;
