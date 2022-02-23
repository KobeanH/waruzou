import { memo } from "react";
import { css } from "@emotion/css";

export const AddInputBtn = memo((props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} type="button" className={addInputBtn}>
      ＋
    </button>
  );
});

const addInputBtn = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0;
    margin: 0 auto;
    height: 36px;
    width: 36px;
    border: none;
    background-color: #ffe9af;
    border-radius: 100%;
    color: #ffb901;
    font-size: 2.5rem;
    font-weight: bold;
}
`;
