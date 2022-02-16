import { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

import { ChangeModeText } from "../atoms/text/ChangeModeText";
import { SplitIcon } from "../atoms/icon/SplitIcon";
import { GameIcon } from "../atoms/icon/GameIcon";
import { RouletteIcon } from "../atoms/icon/RouletteIcon";

export const ChangeMode = () => {
  const [modeOn, setModeOn] = useState([true, false]);

  //モード切り替え
  const changeMode = (index) => {
    let newModeOn = [false, false];
    newModeOn[index] = true;
    setModeOn(newModeOn);
  };

  return (
    <div className={changeModePosition}>
      <div className={modeWrap}>
        <Link
          onClick={() => changeMode(0)}
          className={modeOn[0] == true ? modeOnn : modeOff}
          to="/build/"
        >
          <SplitIcon />
          <ChangeModeText modeOn={modeOn[0]}>割り勘モード</ChangeModeText>
        </Link>
        <Link
          onClick={() => changeMode(1)}
          className={modeOn[1] == true ? modeOnn : modeOff}
          to="/game/"
        >
          <GameIcon />
          <ChangeModeText modeOn={modeOn[1]}>ゲームモード</ChangeModeText>
        </Link>
        <Link
          onClick={() => changeMode(2)}
          className={modeOn[2] == true ? modeOnn : modeOff}
          to="/roulette/"
        >
          <RouletteIcon />
          <ChangeModeText modeOn={modeOn[2]}>ルーレットモード</ChangeModeText>
        </Link>
      </div>
    </div>
  );
};
const changeModePosition = css`
  position: fixed;
  bottom: 4vh;
  left: 0;
  right: 0;
  max-width: 375px;
  margin: auto;
  padding: 0 20px;
  @media (max-height: 740px) {
    bottom: 2vh;
  }
`;
const modeWrap = css`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 375px;
  padding: 10px 14px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
`;

const modeOnn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  max-width: 220px;
  width: 100%;
  padding: 12px;
  background-color: #e5eaf6;
  border-radius: 36px;
  box-shadow: 0px 1px 7px rgba(229, 234, 246, 1);
  transition: all 0.3s linear;
  overflow: hidden;
  color: #3549c9;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  > svg {
    fill: #3549c9;
  }
`;
const modeOff = css`
  position: relative;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 52px;
  height: 52px;
  background-color: rgba(128, 128, 128, 0.25);
  border-radius: 36px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 0.3s linear;
  color: #3549c9;
  font-weight: bold;
  text-decoration: none;
  > svg {
    fill: #808080;
  }
`;
