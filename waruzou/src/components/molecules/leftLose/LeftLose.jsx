import { memo } from "react";
import { css } from "@emotion/css";

export const LeftLose = memo((props) => {
  const { lottoArray, gameEnd } = props;

  return (
    <div className={LeftLoseWrap}>
      {gameEnd ? (
        <p className={textAfterGame}>全てのはずれが引かれました</p>
      ) : (
        <ul className={LeftLoseList}>
          {lottoArray.map((lotto, i) => (
            <li className={leftLoseItem} key={i}>
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
  max-width: calc(100% - 40px);
  width: 100%;
  box-sizing: border-box;
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
    max-width: 414px;
    top: -17vh;
  }
`;
const textAfterGame = css`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  height: 10vh;

  @media (max-height: 740px) {
    height: 8vh;
  }
  @media (max-height: 667px) {
    height: 8.5vh;
  }
`;
const LeftLoseList = css`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0 0;
  gap: 1.5vh;
  height: 10vh;
  box-sizing: border-box;
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
  width: 150px;
  list-style: none;
  color: #808080;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1px;
`;
