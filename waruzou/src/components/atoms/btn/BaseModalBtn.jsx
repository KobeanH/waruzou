import { memo } from "react";
import { css } from "@emotion/css";
import { Color } from "../../utility/Color";

export const BaseModalBtn = memo((props) => {
  const { children, onClick } = props;
  return (
    <button type="button" onClick={onClick} className={baseModalBtn}>
      {children}
    </button>
  );
});

const baseModalBtn = css`
  border: none;
  box-sizing: border-box;
  padding: 16px;
  border-radius: 6px;
  background: ${Color.mainColor};
  color: ${Color.fontWhite};
  width: 120px;
  font-size: 1.5rem;
  font-weight: bold;
  white-space: nowrap;
`;
