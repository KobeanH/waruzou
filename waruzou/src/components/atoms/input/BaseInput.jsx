import { memo } from "react";
import { css } from "@emotion/css";

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
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-size: 1.6rem;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #808080;
  -webkit-appearance: none;
  &::placeholder {
    color: rgba(128, 128, 128, 0.65);
  }
  @media (max-height: 740px) {
    width: 100%;
    padding: 1.5vh 8px;
    &::placeholder {
      font-size: 1.2rem;
    }
  }
`;
