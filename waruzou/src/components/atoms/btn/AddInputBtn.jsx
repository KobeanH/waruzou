import { memo } from "react";
import { css } from "@emotion/css";
import { Color } from "../../utility/Color";

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
    background-color: ${Color.subColor};
    border-radius: 100%;
    color: ${Color.mainColor};
    font-size: 2.5rem;
    font-weight: bold;
}
`;
