import { memo } from "react";
import { css } from "@emotion/css";

import logo from "../img/warican-logo.png";
import { HeaderTtlText } from "../atoms/header/HeaderTtlText";

export const HeaderTtl = memo(() => {
  return (
    <div className={headerTtl}>
      <img className={logoImg} src={logo} alt="warican-logo" />
      <HeaderTtlText />
    </div>
  );
});

const headerTtl = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 42px;
  max-width: 160px;
  width: 100%;
  background-color: #fff;
  border-radius: 24px;
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.25);
  @media (max-height: 740px) {
    margin-bottom: 0;
  }
`;
const logoImg = css`
  max-width: 25px;
`;
