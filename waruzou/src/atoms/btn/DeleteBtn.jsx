import { css } from "@emotion/css";

export const DeleteBtn = (props) => {
  const { deleteInput, children } = props;

  return (
    <button className={deleteBtn} type="button" onClick={deleteInput}>
      {children}
    </button>
  );
};

const deleteBtn = css`
  white-space: nowrap;
`;
