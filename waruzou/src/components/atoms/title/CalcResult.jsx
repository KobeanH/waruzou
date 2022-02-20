import { css } from "@emotion/css";
import { BaseMiniTitleStyle } from "./BaseMiniTitleStyle";

export const CalcResult = (props) => {
  const { children } = props;
  return <span className={calcResult}>{children}</span>;
};

const calcResult = css`
  ${BaseMiniTitleStyle}
  margin-bottom: 16px;
  margin-left: 32px;
`;
