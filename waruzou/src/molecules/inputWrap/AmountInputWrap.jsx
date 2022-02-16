import { css } from "@emotion/css";
import { useRecoilState } from "recoil";

import { AmountState } from "../../store/amountState";
import { Icon } from "../../atoms/icon/icon";
import { AmountIcon } from "../../atoms/icon/AmountIcon";
import { BaseInput } from "../../atoms/input/BaseModeInput";

export const AmountInputWrap = () => {
  const [amount, setAmount] = useRecoilState(AmountState);

  //合計金額入力欄
  const getValueFromAmount = (e) => {
    const value = e.target.value.replace(/\D/g, ""); //数字以外は入力できないように
    setAmount(value);
  };

  return (
    <div className={inputWrap}>
      <Icon>
        <AmountIcon />
      </Icon>
      <BaseInput
        placeholder={"金額"}
        type={"tel"}
        onChange={getValueFromAmount}
        maxLength={"8"}
        value={amount}
      ></BaseInput>
    </div>
  );
};

const inputWrap = css`
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
