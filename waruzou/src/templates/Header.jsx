import { css } from "@emotion/css";
import logoIcon from "../img/logoIcon.svg";

export const Header = () => {
  return (
    <div className={app}>
      <header className={header}>
        <div className={headerTtlWrap}>
          <img className={headerTtlLogo} src={logoIcon} alt="logo" />
          <h2 className={headerTtl}>
            わり<span className={headerTtlEn}>Can</span>
          </h2>
        </div>
      </header>
    </div>
  );
};

const app = css`
  color: #808080;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
`;

const header = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(#6f86d6, #90a9ff);
  height: 13.5vh;
  border-radius: 0 0 24px 24px;
  margin-bottom: 3.5vh;
  @media (max-height: 740px) {
    align-items: center;
    margin-bottom: 2.5vh;
  }
`;
const headerTtlWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  height: 42px;
  background-color: #fff;
  max-width: 170px;
  width: 100%;
  border-radius: 24px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  @media (max-height: 740px) {
    margin-bottom: 3vh;
  }
  @media (max-height: 740px) {
    margin-bottom: 0;
  }
`;
const headerTtl = css`
  color: #6f86d6;
  font-size: 16px;
`;
const headerTtlEn = css`
  color: #ffc56f;
`;
const headerTtlLogo = css`
  width: 20px;
`;
