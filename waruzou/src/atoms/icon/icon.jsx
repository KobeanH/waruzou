import { css } from "@emotion/css";

export const Icon = (props) => {
  const { ppl, children, pplIcon, notShowPplIcon } = props;

  const amountSpan = css`
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
    transition: all 1s;
    ${pplIcon}
  `;
  const amountSpanOn = css`
    display: inline-block;
    background-color: #e5eaf6;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
    transition: all 1s;
    ${notShowPplIcon}
  `;

  return (
    <span className={ppl == true ? amountSpanOn : amountSpan}>{children}</span>
  );
};
