import { css } from "@emotion/css";

export const ChangeModeText = (props) => {
  const { modeOn, children } = props;
  return <span className={modeOn == true ? hidden : show}>{children}</span>;
};
const show = css`
  overflow: hidden;
  display: none;
  transition: all 1s;
  position: absolute;
  right: -90px;
`;
const hidden = css`
  display: inline-block;
  overflow: hidden;
  transition: all 1s;
`;
