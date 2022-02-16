import { css } from "@emotion/css";

export const ChangeModeText = (props) => {
  const { modeOn, children } = props;
  return <span className={modeOn == true ? show : hidden}>{children}</span>;
};
const show = css`
  display: inline-block;
  // transition: all 1s;
  overflow: hidden;
`;
const hidden = css`
  position: absolute;
  right: -90px;
  visibility: hidden;
  // display: none;
  // transition: all 1s;
  overflow: hidden;
`;
