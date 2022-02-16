import { css } from "@emotion/css";

export const AddInputBtn = (props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} type="button" className={addInputBtn}>
      ＋
    </button>
  );
};

const addInputBtn = css`
  display: block;
  margin: 0 auto;
  border: none;
  background-color: #ffe9af;
  border-radius: 100%;
  color: #ffb901;
  font-size: 2.5rem;
  font-weight: bold;
`;
