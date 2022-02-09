import Modal from "react-modal";

import { css } from "@emotion/css";
import { SplitModeInput } from "../../atoms/input/SplitModeInput";
import { DeleteBtn } from "../../atoms/btn/DeleteBtn";

Modal.setAppElement("#root");

export const GameInputWrao = (props) => {
  const {
    objAmount,
    itemAmount,
    updateAmount,
    tel,
    maxLength8,
    i,
    people,
    itemPeople,
    updatePeople,
    maxLength2,
    deleteInput,
    showDelete,
  } = props;

  return (
    <div className={GameInputWrap} key={i}>
      <SplitModeInput
        placeholder={objAmount}
        value={itemAmount}
        onChange={updateAmount}
        type={tel}
        maxLength={maxLength8}
      />
      <SplitModeInput
        placeholder={people}
        value={itemPeople}
        onChange={updatePeople}
        type={tel}
        maxLength={maxLength2}
      />
      {showDelete && <DeleteBtn deleteInput={deleteInput}>削除</DeleteBtn>}
    </div>
  );
};

const GameInputWrap = css`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 8px;
`;
