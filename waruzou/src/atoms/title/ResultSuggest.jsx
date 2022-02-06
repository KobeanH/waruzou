import { css } from "@emotion/css";
import { BaseMiniTitleStyle } from "./BaseMiniTitleStyle";

export const ResultSuggest = (props) => {
  const { children } = props;
  return <span className={resultSuggest}>{children}</span>;
};

const resultSuggest = css`
  ${BaseMiniTitleStyle}
  margin-bottom: 32px;
  color: #3549c9;
  background-color: #e5eaf6;
  box-shadow: 0px 2px 9px #e5eaf6;
`;
