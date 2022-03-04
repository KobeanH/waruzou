import { memo } from "react";
import { css } from "@emotion/css";

import { Color } from "../../utility/Color";

export const BaseInput = memo((props) => {
  const { placeholder, type, onChange, maxLength, value } = props;

  return (
    <input
      className={baseInput}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      maxLength={maxLength}
      value={value}
    />
  );
});
const baseInput = css`
  width: 100%;
  padding: 1.5vh 16px;
  border: none;
  border-radius: 8px;
  box-shadow: ${Color.mainShadow};
  font-size: 1.6rem;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: ${Color.mainFont};
  -webkit-appearance: none;
  &::placeholder {
    color: ${Color.mainFont};
  }
  @media (max-height: 740px) {
    width: 100%;
    padding: 1.5vh 8px;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;
