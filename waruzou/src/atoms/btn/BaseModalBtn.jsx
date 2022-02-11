import { css } from "@emotion/css";

export const BaseModalBtn = (props) => {
  const { children, onClick } = props;
  return (
    <button type="button" onClick={onClick} className={baseModalBtn}>
      {children}
    </button>
  );
};

const baseModalBtn = css`
  border: none;
  padding: 20px 16px;
  border-radius: 6px;
  background: #6f86d6;
  color: #fff;
  width: 120px;
  box-sizing: border-box;
  white-space: nowrap;
`;
