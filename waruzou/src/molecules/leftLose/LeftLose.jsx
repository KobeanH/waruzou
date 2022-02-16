import { css } from "@emotion/css";

export const LeftLose = (props) => {
  const { lottoArray } = props;
  return (
    <div className={LeftLoseWrap}>
      <ul className={LeftLoseList}>
        {lottoArray.map((lotto, i) => (
          <li className={leftLoseItem} key={i}>
            <span>¥{Number(lotto.objAmount).toLocaleString()}</span>•••
            <span>{lotto.objNumPpl}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
const LeftLoseWrap = css`
  position: absolute;
  top: -110px;
  max-width: 350px;
  width: 100%;
  box-sizing: border-box;
  padding: 12px 22px;
  margin: 0 0 28px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  @media (max-height: 740px) {
    padding: 13px 12px;
    margin: 0 0 30px;
  }
  @media (max-height: 667px) {
    margin: 0 0 24px;
  }
`;
const LeftLoseList = css`
  padding: 0;
  display: flex;
  justify-content: space-between;
  margin: 0 0;
  gap: 1.5vh;
  height: 10vh;
  box-sizing: border-box;
  overflow: scroll;
  @media (max-height: 740px) {
    height: 8vh;
  }
  @media (max-height: 667px) {
    height: 10vh;
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
  // @media (max-height: 740px) {
  //   padding: 13px 22px;
  //   margin: 0 0 14px;
  // }
`;
