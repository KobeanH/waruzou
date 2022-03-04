import { memo } from "react";
import { css } from "@emotion/css";

import { BaseMiniTitleStyle } from "./BaseMiniTitleStyle";
import { Color } from "../../utility/Color";


export const ResultSuggest = memo((props) => {
  const { children } = props;
  return <span className={resultSuggest}>{children}</span>;
});

const resultSuggest = css`
  ${BaseMiniTitleStyle}
  margin-bottom: 3vh;
  background-color: ${Color.subColor};
  box-shadow: 0px 2px 9px ${Color.subColor};
  color: ${Color.mainColor};
  @media (min-width: 430px) {
    margin-bottom: 2.5vh;
  }
`;
