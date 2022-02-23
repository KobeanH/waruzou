import { memo } from "react";
import { css } from "@emotion/css";

import { BaseMiniTitleStyle } from "./BaseMiniTitleStyle";

export const ResultSuggest = memo((props) => {
  const { children } = props;
  return <span className={resultSuggest}>{children}</span>;
});

const resultSuggest = css`
  ${BaseMiniTitleStyle}
  margin-bottom: 3vh;
  background-color: #ffe9af;
  box-shadow: 0px 2px 9px #ffe9af;
  color: #ffb901;
  @media (min-width: 430px) {
    margin-bottom: 2.5vh;
  }
`;
