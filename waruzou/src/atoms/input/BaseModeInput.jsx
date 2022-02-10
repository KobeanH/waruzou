import { css } from "@emotion/css";

export const BaseInput = (props) => {
  const { placeholder, type, onChange, maxLength, value } = props;

  return (
    <input
      className={baseInput}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      maxLength={maxLength}
      required="required"
      value={value}
    />
  );
};
const baseInput = css`
  width: 100%;
  padding: 1.5vh 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-size: 16px;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #808080;
  &::placeholder {
    color: rgba(128, 128, 128, 0.65);
  }
  @media (max-height: 740px) {
    width: 100%;
    padding: 1.5vh 8px;
    font-size: 16px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
