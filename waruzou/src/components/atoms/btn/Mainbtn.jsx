import { memo } from "react";
import { css } from "@emotion/css";
import { Color } from "../../utility/Color";

export const MainBtn = memo((props) => {
  const { children, onClick, mainBtnPosition, createInputMargin } = props;
  const mainBtn = css`
    display: block;
    max-width: 200px;
    width: 100%;
    padding: 15px 16px;
    background-color: ${Color.mainColor};
    border-radius: 100px;
    border: none;
    box-shadow: 0px 4px 4px rgba(255, 197, 111, 0.25);
    font-size: 1.5rem;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    color: ${Color.fontWhite};
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      transition: all 0.3s;
    }
    @media (max-height: 553px) {
      max-width: 160px;
      padding: 10px 16px;
      font-size: 1.4rem;
    }
    ${mainBtnPosition}
    ${createInputMargin}
  `;

  return (
    <button className={mainBtn} type="button" onClick={onClick}>
      {children}
    </button>
  );
});
