import { memo } from "react";
import { css } from "@emotion/css";

export const ChangeModeText = memo((props) => {
  const { modeOn, children } = props;
  return <span className={modeOn ? show : hidden}>{children}</span>;
});

const show = css`
  display: inline-block;
  overflow: hidden;
  @media (max-width: 375px) {
    font-size: 1.4rem;
  }
`;

const hidden = css`
  position: absolute;
  right: -90px;
  visibility: hidden;
  overflow: hidden;
`;
