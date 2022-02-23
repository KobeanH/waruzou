import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { css } from "@emotion/css";
import { useRecoilState } from "recoil";

import { ChangeModeText } from "../atoms/text/ChangeModeText";
import { SplitIcon } from "../atoms/icon/SplitIcon";
import { GameIcon } from "../atoms/icon/GameIcon";
import { RouletteIcon } from "../atoms/icon/RouletteIcon";
import { ShowAnnounceState } from "../store/ShowAnnounceState";

export const ChangeMode = memo(() => {
  const [showAnnounce, setShowAnnounce] = useRecoilState(ShowAnnounceState);
  const location = useLocation();

  //モード切り替え
  const changeMode = () => {
    setShowAnnounce(true);
  };

  return (
    <div className={changeModePosition}>
      <div className={modeWrap}>
        <Link
          onClick={() => changeMode()}
          className={location.pathname === "/" ? modeOnn : modeOff}
          to="/"
        >
          <SplitIcon />
          <ChangeModeText modeOn={location.pathname === "/"}>
            割り勘モード
          </ChangeModeText>
        </Link>
        <Link
          onClick={() => changeMode()}
          className={location.pathname === "/game/" ? modeOnn : modeOff}
          to="/game/"
        >
          <GameIcon />
          <ChangeModeText modeOn={location.pathname === "/game/"}>
            ゲームモード
          </ChangeModeText>
        </Link>
        <Link
          onClick={() => changeMode()}
          className={location.pathname === "/roulette/" ? modeOnn : modeOff}
          to="/roulette/"
        >
          <RouletteIcon />
          <ChangeModeText modeOn={location.pathname === "/roulette/"}>
            ルーレットモード
          </ChangeModeText>
        </Link>
      </div>
    </div>
  );
});
const changeModePosition = css`
  position: fixed;
  bottom: 2vh;
  left: 0;
  right: 0;
  max-width: 375px;
  margin: auto;
  padding: 0 20px;
  @media (min-width: 430px) {
    bottom: 5vh;
  }
`;
const modeWrap = css`
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  max-width: 375px;
  padding: 10px 14px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  & :nth-child(3) {
    gap: 6px;
  }
  @media (max-width: 360px) {
    gap: 6px;
  }
`;

const modeOnn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  box-sizing: border-box;
  max-width: 190px;
  width: 100%;
  padding: 12px;
  background-color: #ffe9af;
  border-radius: 36px;
  box-shadow: 0px 1px 7px rgba(229, 234, 246, 1);
  transition: all 0.3s linear;
  overflow: hidden;
  color: #ffb901;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
  > svg {
    fill: #ffb901;
  }
  @media (max-height: 553px) {
    max-width: 180px;
    padding: 6px 12px;
  }
  @media (max-width: 370px) {
    padding: 6px 12px;
  }
`;
const modeOff = css`
  position: relative;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 52px;
  height: 52px;
  background-color: rgba(128, 128, 128, 0.25);
  border-radius: 36px;
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 0.3s linear;
  color: #ffb901;
  font-weight: bold;
  text-decoration: none;
  > svg {
    fill: #808080;
  }
  @media (max-height: 553px) {
    width: 42px;
    height: 42px;
  }
  @media (max-width: 370px) {
    width: 42px;
    height: 42px;
  }
`;
