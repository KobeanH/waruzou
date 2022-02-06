import { css } from "@emotion/css";
import { InputWrap } from "../molecules/inputWrap/inputWrap";
import { PersonInputWrap } from "../molecules/inputWrap/PersonInputWrap";

export const InputWrapper = () => {
  return (
    <div className={inputWrapper}>
      <InputWrap></InputWrap>
      <PersonInputWrap></PersonInputWrap>
    </div>
  );
};

const inputWrapper = css`
  &:nth-child(1) {
    margin-bottom: 3.5vh;
  }
  @media (max-height: 740px) {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    &:nth-child(1) {
      margin-bottom: 2vh;
    }
  }
`;
