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
  padding: 16px;
  border-radius: 6px;
  background: #ffb901;
  color: #fff;
  width: 120px;
  font-size: 1.5rem;
  font-weight: bold;
  box-sizing: border-box;
  white-space: nowrap;
`;
