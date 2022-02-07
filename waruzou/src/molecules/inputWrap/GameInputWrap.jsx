import Modal from "react-modal";

import { css } from "@emotion/css";
import { SplitModeInput } from "../../atoms/input/SplitModeInput";

Modal.setAppElement("#root");

export const GameInputWrao = (props) => {
  const {
    amount,
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
  } = props;

  return (
    <div className={GameInputWrap} key={i}>
      <SplitModeInput
        placeholder={amount}
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
      <button className={DeleteBtn} type="button" onClick={deleteInput}>
        削除
      </button>
    </div>
  );
};

const GameInputWrap = css`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  margin-bottom: 8px;
`;
const DeleteBtn = css`
  white-space: nowrap;
`;
