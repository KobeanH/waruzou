import { css } from "@emotion/css";

import { Color } from "../../utility/Color";

export const BaseMiniTitleStyle = css`
  display: inline-block;
  color: ${Color.fontMain};
  padding: 3px 16px;
  border-radius: 20px;
  text-align: center;
  background-color: ${Color.backGroundWhite};
  vertical-align: middle;
  box-shadow: ${Color.mainShadow};
  font-size: 1.2rem;
  @media (max-height: 740px) {
    margin-bottom: 1.5vh;
  }
`;
