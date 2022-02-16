import { css } from "@emotion/css";

export const Icon = (props) => {
  const { ppl, children, pplIcon, notShowPplIcon, fromGameMode } = props;

  const amountSpan = css`
    display: inline-block;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
    transition: all 1s;
    ${pplIcon}
    ${fromGameMode}
  `;
  const amountSpanOn = css`
    display: inline-block;
    background-color: #ffe9af;
    border-radius: 100%;
    box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
    transition: all 1s;
    ${notShowPplIcon}
  `;

  return (
    <span className={ppl == true ? amountSpanOn : amountSpan}>{children}</span>
  );
};
