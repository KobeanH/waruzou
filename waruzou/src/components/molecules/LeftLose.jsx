import { memo } from "react";
import { css } from "@emotion/css";

export const LeftLose = memo((props) => {
  const { lottoArray, gameEnd } = props;

  return (
    <div className={LeftLoseWrap}>
      {gameEnd ? (
        <p className={textAfterGame}>ゲームが終了しました</p>
      ) : (
        <ul className={LeftLoseList}>
          {lottoArray.map((lotto, index) => (
            <li className={leftLoseItem} key={index}>
              <span>¥{Number(lotto.objAmount).toLocaleString()}</span>…
              <span>{lotto.objNumPpl}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});
const LeftLoseWrap = css`
  position: absolute;
  top: -110px;
  box-sizing: border-box;
  max-width: calc(100% - 40px);
  width: 100%;
  padding: 12px 22px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  @media (max-height: 740px) {
    padding: 13px 12px;
    margin: 0 0 30px;
  }
  @media (max-height: 553px) {
    max-width: 335px;
    padding: 12px;
    top: -80px;
  }
  @media (min-width: 430px) {
    max-width: 375px;
    top: -17vh;
  }
`;
const textAfterGame = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 10vh;
  font-size: 1.6rem;
  @media (max-height: 740px) {
    height: 8vh;
  }
  @media (max-height: 667px) {
    height: 8.5vh;
  }
`;
const LeftLoseList = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: 10vh;
  padding: 0;
  margin: 0 0;
  gap: 1.5vh;
  overflow: scroll;
  @media (max-height: 740px) {
    height: 8vh;
  }
  @media (max-height: 667px) {
    height: 8.5vh;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const leftLoseItem = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1px;
  width: 150px;
  list-style: none;
  color: #808080;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
