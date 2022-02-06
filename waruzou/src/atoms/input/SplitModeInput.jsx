import { css } from "@emotion/css";

export const SplitModeInput = (props) => {
  const { placeholder, type, onChange, maxLength } = props;

  return (
    <input
      className={splitModeInput}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      maxLength={maxLength}
    />
  );
};
const splitModeInput = css`
  font-size: 16px;
  width: 100%;
  padding: 1.5vh 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #808080;
  &::placeholder {
    color: rgba(128, 128, 128, 0.65);
  }
  @media (max-height: 740px) {
    width: 100%;
    font-size: 16px;
    padding: 1.5vh 8px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
