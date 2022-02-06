import { css } from "@emotion/css";
import { HeaderTtlText } from "../atoms/header/HeaderTtlText";
import { HeaderTtlLogo } from "../atoms/header/HeaderLogo";

export const HeaderTtl = () => {
  return (
    <div className={headerTtl}>
      <HeaderTtlLogo />
      <HeaderTtlText />
    </div>
  );
};

const headerTtl = css`
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
