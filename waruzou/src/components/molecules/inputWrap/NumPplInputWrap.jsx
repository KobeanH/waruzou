import { memo, useCallback } from "react";
import { css } from "@emotion/css";
import { useRecoilState } from "recoil";

import { NumPplState } from "../../store/numPplState";
import { BaseIcon } from "../../atoms/icon/Baseicon";
import { NumPplIcon } from "../../atoms/icon/NumPplIcon";
import { BaseInput } from "../../atoms/input/BaseInput";

export const NumPplInputWrap = memo(() => {
  const [numppl, setNumPpl] = useRecoilState(NumPplState); //人数

  const getValueFromNumPpl = useCallback((event) => {
    if (event.target.value === "0") return;
    const value = event.target.value.replace(/\D/g, ""); //数字以外は入力できないように
    setNumPpl(value);
  }, []);

  return (
    <div className={numPplInputWrap}>
      <BaseIcon>
        <NumPplIcon />
      </BaseIcon>
      <BaseInput
        placeholder="人数"
        type="tel"
        maxLength="3"
        value={numppl}
        onChange={getValueFromNumPpl}
      ></BaseInput>
    </div>
  );
});

const numPplInputWrap = css`
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
