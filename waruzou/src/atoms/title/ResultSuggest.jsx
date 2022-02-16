import { css } from "@emotion/css";
import { BaseMiniTitleStyle } from "./BaseMiniTitleStyle";

export const ResultSuggest = (props) => {
  const { children } = props;
  return <span className={resultSuggest}>{children}</span>;
};

const resultSuggest = css`
  ${BaseMiniTitleStyle}
  margin-bottom: 2vh;
  color: #ffb901;
  background-color: #ffe9af;
  box-shadow: 0px 2px 9px #ffe9af;
`;
