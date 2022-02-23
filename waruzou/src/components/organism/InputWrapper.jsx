import { memo } from "react";
import { css } from "@emotion/css";

import { AmountInputWrap } from "../molecules/inputWrap/AmountInputWrap";
import { NumPplInputWrap } from "../molecules/inputWrap/NumPplInputWrap";

export const InputWrapper = memo(() => {
  return (
    <div className={inputWrapper}>
      <AmountInputWrap></AmountInputWrap>
      <NumPplInputWrap></NumPplInputWrap>
    </div>
  );
});

const inputWrapper = css`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 430px) {
    margin-bottom: 2vh;
  }
`;
