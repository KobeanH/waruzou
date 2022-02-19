import { css } from "@emotion/css";

export const MainBtn = (props) => {
  const { children, onClick, mainBtnPosition, createInputMargin } = props;
  const mainBtn = css`
    display: block;
    max-width: 200px;
    width: 100%;
    background-color: #ffb901;
    color: #fff;
    padding: 15px 16px;
    border-radius: 100px;
    border: none;
    box-shadow: 0px 4px 4px rgba(255, 197, 111, 0.25);
    transition: all 0.3s;
    font-size: 1.5rem;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: bold;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
      transition: all 0.3s;
    }
    &:hover resultItem {
      color: red;
    }
    ${mainBtnPosition}
    ${createInputMargin}
  `;

  return (
    <button className={mainBtn} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
