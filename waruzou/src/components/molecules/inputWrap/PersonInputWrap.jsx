import { css } from "@emotion/css";
import { useRecoilState } from "recoil";

import { numPplState } from "../../store/numPplState";
import { Icon } from "../../atoms/icon/icon";
import { PersonIcon } from "../../atoms/icon/PersonIcon";
import { BaseInput } from "../../atoms/input/BaseModeInput";

export const PersonInputWrap = () => {
  const [ppl, setPpl] = useRecoilState(numPplState); //人数

  const getValueFromPpl = (e) => {
    const value = e.target.value.replace(/\D/g, ""); //数字以外は入力できないように
    setPpl(value);
  };

  return (
    <div className={inputWrap}>
      <Icon>
        <PersonIcon />
      </Icon>
      <BaseInput
        placeholder={"人数"}
        type={"tel"}
        onChange={getValueFromPpl}
        maxLength={"3"}
        value={ppl}
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
