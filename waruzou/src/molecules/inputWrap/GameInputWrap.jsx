import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { css } from "@emotion/css";

import { LottoArrayState } from "../../store/lottoArrayState";
import { BaseInput } from "../../atoms/input/BaseModeInput";
import { DeleteBtn } from "../../atoms/btn/DeleteBtn";

Modal.setAppElement("#root");

export const GameInputWrao = (props) => {
  const { showDelete, spreadLottoArray } = props;
  const [lottoArray, setLottoArray] = useRecoilState(LottoArrayState);

  //inputタグを削除
  const deleteInput = (index) => {
    spreadLottoArray.splice(index, 1);
    setLottoArray(spreadLottoArray);
  };

  //金額inputの更新
  const updateAmount = (index, value) => {
    // const val = val.target.value.replace(/\D/g, "");
    spreadLottoArray[index] = { ...lottoArray[index], objAmount: value };
    setLottoArray(spreadLottoArray);
  };

  //人数inputの更新
  const updatePeople = (index, value) => {
    // const val = val.target.value.replace(/\D/g, "");
    spreadLottoArray[index] = { ...lottoArray[index], objNumPpl: value };
    setLottoArray(spreadLottoArray);
  };
  return (
    <div className={GameInputWrapHeight}>
      {lottoArray.map((lotto, i) => (
        <div className={GameInputWrap} key={i}>
          <BaseInput
            placeholder={"金額"}
            value={lotto.objAmount}
            onChange={(e) => updateAmount(i, e.target.value)}
            type={"tel"}
            maxLength={8}
          />
          <BaseInput
            placeholder={"人数"}
            value={lotto.objNumPpl}
            onChange={(e) => updatePeople(i, e.target.value)}
            type={"tel"}
            maxLength={2}
          />
          {showDelete && (
            <DeleteBtn onClick={() => deleteInput(i)}>削除</DeleteBtn>
          )}
        </div>
      ))}
    </div>
  );
};
const GameInputWrapHeight = css`
  height: 48vh;
  overflow: scroll;
  @media (max-height: 740px) {
    height: 44vh;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
const GameInputWrap = css`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 8px;
`;
