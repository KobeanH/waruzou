import { memo, useCallback } from "react";
import { css } from "@emotion/css";
import Modal from "react-modal";
import { useRecoilState } from "recoil";

import { LottoArrayState } from "../../store/lottoArrayState";
import { BaseInput } from "../../atoms/input/BaseInput";
import { DeleteBtn } from "../../atoms/btn/DeleteBtn";
import { AddInputBtn } from "../../atoms/btn/AddInputBtn";

Modal.setAppElement("#root");

export const GameInputWrap = memo((props) => {
  const { showDelete, spreadedLottoArray, onClick } = props;
  const [lottoArray, setLottoArray] = useRecoilState(LottoArrayState);

  //inputタグを削除
  const deleteInput = useCallback(
    (index) => {
      spreadedLottoArray.splice(index, 1);
      setLottoArray(spreadedLottoArray);
    },
    [spreadedLottoArray]
  );

  //金額inputの更新
  const updateAmount = useCallback(
    (index, value) => {
      if (value === "0") return; //最初に"0"を入力不可にする処理
      const val = value.replace(/\D/g, ""); //数字以外入力不可にする処理
      spreadedLottoArray[index] = { ...lottoArray[index], objAmount: val };
      setLottoArray(spreadedLottoArray);
    },
    [spreadedLottoArray]
  );

  //人数inputの更新
  const updatePeople = useCallback(
    (index, value) => {
      if (value === "0") return; //最初に"0"を入力不可にする処理
      const val = value.replace(/\D/g, ""); //数字以外入力不可にする処理
      spreadedLottoArray[index] = { ...lottoArray[index], objNumPpl: val };
      setLottoArray(spreadedLottoArray);
    },
    [spreadedLottoArray]
  );

  return (
    <div className={GameInputWrapHeight}>
      {lottoArray.map((lotto, index) => (
        <div className={gameInputWrap} key={index}>
          <BaseInput
            placeholder="金額"
            value={lotto.objAmount}
            onChange={(e) => updateAmount(index, e.target.value)}
            type="tel"
            maxLength={8}
          />
          <BaseInput
            placeholder="人数"
            value={lotto.objNumPpl}
            onChange={(e) => updatePeople(index, e.target.value)}
            type="tel"
            maxLength={2}
          />
          {showDelete && (
            <DeleteBtn onClick={() => deleteInput(index)}>削除</DeleteBtn>
          )}
        </div>
      ))}
      <AddInputBtn onClick={onClick} />
    </div>
  );
});
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
const gameInputWrap = css`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 12px;
`;
