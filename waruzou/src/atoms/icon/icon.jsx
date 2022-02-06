import { css } from "@emotion/css";

export const Icon = (props) => {
  const { ppl, children } = props;

  return (
    <span className={ppl == true ? amountSpanOn : amountSpan}>{children}</span>
  );
};

const amountSpan = css`
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 1s;
`;
const amountSpanOn = css`
  display: inline-block;
  background-color: #e5eaf6;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 1s;
`;
