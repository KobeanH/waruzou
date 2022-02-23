import { memo } from "react";
import { css } from "@emotion/css";

export const BaseIcon = memo((props) => {
  const { children, numPplIconPosition, amountIconMargin } = props;

  const baseIcon = css`
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
    transition: all 1s;
    ${numPplIconPosition}
    ${amountIconMargin}
  `;

  return <span className={baseIcon}>{children}</span>;
});
