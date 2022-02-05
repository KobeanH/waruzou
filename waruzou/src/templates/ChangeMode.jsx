import { useState } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/css";

export const ChangeMode = () => {
  const [gameBtn, setGameBtn] = useState(false);
  const [modeOn, setModeOn] = useState([true, false]);

  //モード切り替え
  const toggleMode = (index) => {
    let newModeOn = [false, false];
    newModeOn[index] = true;
    setModeOn(newModeOn);
  };

  return (
    <div className={modeWrap}>
      <Link
        onClick={() => toggleMode(0)}
        className={modeOn[0] == true ? modeOnn : modeOff}
        to="/"
      >
        <svg
          className={gameBtn === true ? calcImggg : calcImga}
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.1111 0H1.88889C0.85 0 0 0.85 0 1.88889V15.1111C0 16.15 0.85 17 1.88889 17H15.1111C16.15 17 17 16.15 17 15.1111V1.88889C17 0.85 16.15 0 15.1111 0ZM9.47278 3.83444L10.4739 2.83333L11.8056 4.165L13.1372 2.83333L14.1383 3.83444L12.8067 5.16611L14.1383 6.49778L13.1372 7.49889L11.8056 6.17667L10.4739 7.50833L9.47278 6.50722L10.8044 5.17555L9.47278 3.83444ZM3.06944 4.45778H7.79167V5.87444H3.06944V4.45778ZM8.02778 12.2778H6.13889V14.1667H4.72222V12.2778H2.83333V10.8611H4.72222V8.97222H6.13889V10.8611H8.02778V12.2778ZM14.1667 13.4583H9.44444V12.0417H14.1667V13.4583ZM14.1667 11.0972H9.44444V9.68056H14.1667V11.0972Z" />
        </svg>

        <span className={modeOn[0] == true ? hidden : show}>割り勘モード</span>
      </Link>
      <Link
        onClick={() => toggleMode(1)}
        className={modeOn[1] == true ? modeOnn : modeOff}
        to="/game"
      >
        <svg
          className={gameBtn === true ? calcImggg : calcImga}
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M19.1863 11.09L18.0963 3.43C17.8163 1.46 16.1263 0 14.1363 0H5.07627C3.08627 0 1.39627 1.46 1.11627 3.43L0.0262663 11.09C-0.193734 12.63 0.996266 14 2.54627 14C3.22627 14 3.86627 13.73 4.34627 13.25L6.60627 11H12.6063L14.8563 13.25C15.3363 13.73 15.9863 14 16.6563 14C18.2163 14 19.4063 12.63 19.1863 11.09ZM8.60627 6H6.60627V8H5.60627V6H3.60627V5H5.60627V3H6.60627V5H8.60627V6ZM12.6063 5C12.0563 5 11.6063 4.55 11.6063 4C11.6063 3.45 12.0563 3 12.6063 3C13.1563 3 13.6063 3.45 13.6063 4C13.6063 4.55 13.1563 5 12.6063 5ZM14.6063 8C14.0563 8 13.6063 7.55 13.6063 7C13.6063 6.45 14.0563 6 14.6063 6C15.1563 6 15.6063 6.45 15.6063 7C15.6063 7.55 15.1563 8 14.6063 8Z" />
        </svg>
        <span className={modeOn[1] == true ? hidden : show}>ゲームモード</span>
        {gameBtn && <span>ゲームモード</span>}
      </Link>
    </div>
  );
};

const show = css`
  overflow: hidden;
  display: none;
  transition: all 1s;
  position: absolute;
  right: -90px;
`;
const hidden = css`
  display: inline-block;
  overflow: hidden;
  transition: all 1s;
`;

const modeWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  background-color: #fff;
  padding: 10px 14px;
  border-radius: 12px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
`;

const modeOnn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  // display: inline-block;
  gap: 16px;
  color: #3549c9;
  background-color: #e5eaf6;
  border-radius: 36px;
  padding: 12px;
  max-width: 220px;
  width: 100%;
  box-shadow: 0px 1px 7px rgba(229, 234, 246, 1);
  text-decoration: none;
  transition: all 1s;
  overflow: hidden;
  white-space: nowrap;
  font-weight: bold;

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
  color: #3549c9;
  background-color: rgba(128, 128, 128, 0.25);
  border-radius: 36px;
  padding: 16px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  text-decoration: none;
  transition: all 1s;
  box-sizing: border-box;
  font-weight: bold;
  width: 52px;
  // overflow: hidden;
  height: 52px;
  > svg {
    fill: #808080;
  }
`;
const calcImga = css`
  fill: #808080;
`;
const calcImggg = css`
  fill: #3549c9;
`;
