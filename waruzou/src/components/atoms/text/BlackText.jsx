import { css } from "@emotion/css";

export const BlackText = (props) => {
  const { children, addedStyle } = props;

  const aboutAmount = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 4px;
    box-sizing: border-box;
    height: 50px;
    margin: 0 0 28px;
    padding-bottom: 20px;
    border-bottom: 1px #808080 dotted;
    font-size: 2rem;
    color: #000000;
    text-align: center;
    @media (max-height: 740px) {
      font-size: 1.6rem;
      margin: 0 0 16px;
      padding: 0 0 1.5vh 16px;
    }
    @media (min-width: 430px) {
      max-width: 375px;
      margin: 0 auto 3vh;
    }
    ${addedStyle}
  `;

  return <p className={aboutAmount}>{children}</p>;
};
