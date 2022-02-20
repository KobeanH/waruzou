import { css } from "@emotion/css";

import { AmountInputWrap } from "../molecules/inputWrap/AmountInputWrap";
import { PersonInputWrap } from "../molecules/inputWrap/PersonInputWrap";

export const InputWrapper = () => {
  return (
    <div className={inputWrapper}>
      <AmountInputWrap></AmountInputWrap>
      <PersonInputWrap></PersonInputWrap>
    </div>
  );
};

const inputWrapper = css`
  &:nth-child(1) {
    margin-bottom: 3.5vh;
  }

  display: flex;
  justify-content: space-between;
  gap: 12px;
  &:nth-child(1) {
    margin-bottom: 2vh;
  }
  @media (min-width: 430px) {
    margin-bottom: 2vh;
  }
`;
