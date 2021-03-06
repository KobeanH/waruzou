import { memo } from "react";
import { css } from "@emotion/css";
import { Color } from "../../utility/Color";

export const DeleteBtn = memo((props) => {
  const { children, onClick } = props;

  return (
    <button className={deleteBtn} type="button" onClick={onClick}>
      {children}
    </button>
  );
});

const deleteBtn = css`
  padding: 6px 12px;
  background-color: #c4c4c4;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 2px 4px rgb(128 128 128 / 25%);
  color: ${Color.fontWhite};
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  white-space: nowrap;
`;
