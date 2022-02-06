import { css } from "@emotion/css";
import { HeaderTtl } from "../molecules/HeaderTtl";

export const Header = () => {
  return (
    <header className={header}>
      <HeaderTtl />
    </header>
  );
};
const header = css`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(#6f86d6, #90a9ff);
  height: 13.5vh;
  border-radius: 0 0 24px 24px;
  margin-bottom: 3.5vh;
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  @media (max-height: 740px) {
    align-items: center;
    margin-bottom: 2.5vh;
  }
`;
