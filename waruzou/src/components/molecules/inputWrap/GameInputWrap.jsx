import Modal from "react-modal";
import { useRecoilState } from "recoil";
import { css } from "@emotion/css";

import { LottoArrayState } from "../../store/lottoArrayState";
import { BaseInput } from "../../atoms/input/BaseInput";
import { DeleteBtn } from "../../atoms/btn/DeleteBtn";
import { AddInputBtn } from "../../atoms/btn/AddInputBtn";

Modal.setAppElement("#root");

export const GameInputWrao = (props) => {
  const { showDelete, spreadLottoArray, onClick } = props;
  const [lottoArray, setLottoArray] = useRecoilState(LottoArrayState);

  //inputタグを削除
  const deleteInput = (index) => {
    spreadLottoArray.splice(index, 1);
    setLottoArray(spreadLottoArray);
  };

  //金額inputの更新
  const updateAmount = (index, value) => {
    if (value === "0") return;
    const val = value.replace(/\D/g, "");
    spreadLottoArray[index] = { ...lottoArray[index], objAmount: val };
    setLottoArray(spreadLottoArray);
  };

  //人数inputの更新
  const updatePeople = (index, value) => {
    if (value === "0") return;
    const val = value.replace(/\D/g, "");
    spreadLottoArray[index] = { ...lottoArray[index], objNumPpl: val };
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
            min={1}
            max={15}
          />
          {showDelete && (
            <DeleteBtn onClick={() => deleteInput(i)}>削除</DeleteBtn>
          )}
        </div>
      ))}
      <AddInputBtn onClick={onClick} />
    </div>
  );
};
const GameInputWrapHeight = css`
  height: 284px;
  overflow: scroll;
  padding-bottom: 16px;
  box-sizing: border-box;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-height: 553px) {
    height: 254px;
  }
  @media (min-width: 430px) {
    height: 42vh;
  }
`;
const GameInputWrap = css`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 12px;
`;
