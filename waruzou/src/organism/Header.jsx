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
  justify-content: flex-start;
  align-items: flex-end;
  height: 64px;
  max-width: 350px;
  margin: 0 auto;
  border-radius: 0 0 24px 24px;
  @media (max-height: 740px) {
    align-items: center;
    margin-bottom: 2.5vh;
  }
`;
