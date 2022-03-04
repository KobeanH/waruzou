import { memo } from "react";
import { css } from "@emotion/css";
import { Color } from "../../utility/Color";

export const BaseIcon = memo((props) => {
  const { children, numPplIconPosition, amountIconMargin } = props;

  const baseIcon = css`
    display: inline-block;
    background-color: ${Color.backGroundWhite};
    border-radius: 100%;
    box-shadow: ${Color.mainShadow};
    transition: all 1s;
    ${numPplIconPosition}
    ${amountIconMargin}
  `;

  return <span className={baseIcon}>{children}</span>;
});
