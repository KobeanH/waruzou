import { css } from "@emotion/css";

export const AboutPerPerson = (props) => {
  const { children, addedStyle } = props;

  const aboutPerPerson = css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 4px;
    margin: 0 0 28px;
    padding-bottom: 20px;
    text-align: center;
    border-bottom: 1px #808080 dotted;
    font-size: 2rem;
    color: #000000;
    height: 50px;
    box-sizing: border-box;
    @media (max-height: 740px) {
      font-size: 16px;
      margin: 0 0 1.5vh;
      padding: 0 0 1.5vh 16px;
    }
    ${addedStyle}
  `;

  return <p className={aboutPerPerson}>{children}</p>;
};
