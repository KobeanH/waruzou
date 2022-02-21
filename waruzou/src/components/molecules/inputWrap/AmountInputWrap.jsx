import { css } from "@emotion/css";
import { useRecoilState } from "recoil";

import { AmountState } from "../../store/amountState";
import { BaseIcon } from "../../atoms/icon/Baseicon";
import { AmountIcon } from "../../atoms/icon/AmountIcon";
import { BaseInput } from "../../atoms/input/BaseInput";
import { useCallback } from "react";

export const AmountInputWrap = () => {
  const [amount, setAmount] = useRecoilState(AmountState);

  const getValueFromAmount = useCallback((event) => {
    if (event.target.value === "0") return;
    const value = event.target.value.replace(/\D/g, ""); //数字以外は入力できないように
    setAmount(value);
  }, []);

  return (
    <div className={amountInputWrap}>
      <BaseIcon>
        <AmountIcon />
      </BaseIcon>
      <BaseInput
        placeholder="金額"
        type="tel"
        maxLength="8"
        value={amount}
        onChange={getValueFromAmount}
      ></BaseInput>
    </div>
  );
};

const amountInputWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-bottom: 12px;
  @media (max-height: 740px) {
    margin-bottom: 0.5vh;
  }
  @media (max-height: 740px) {
    margin-bottom: 1vh;
    width: 100%;
    gap: 4px;
  }
`;
