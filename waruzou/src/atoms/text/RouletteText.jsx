import { css } from "@emotion/css";

export const RouletteText = (props) => {
  const { children } = props;

  return <p className={resultItem}>{children}</p>;
};

const resultItem = css`
  margin-bottom: 2.5vh;
  font-size: 28px;
  color: #6f86d6;
  text-align: center;
  @media (max-height: 740px) {
    font-size: 24px;
  }
  @media (max-height: 740px) {
    font-size: 26px;
    margin-bottom: 3vh;
  }
`;
