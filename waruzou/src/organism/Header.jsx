import { css } from "@emotion/css";
import { HeaderTtl } from "../molecules/HeaderTtl";

import { useRecoilValue } from "recoil";
import { showHeaderState } from "../store/showHeaderState";

export const Header = () => {
  const showHeader = useRecoilValue(showHeaderState);
  return (
    <>
      {showHeader && (
        <header className={header}>
          <HeaderTtl />
        </header>
      )}
    </>
  );
};
const header = css`
  display: none;
  @media (max-height: 740px) {
    align-items: center;
    margin-bottom: 2.5vh;
  }
  @media (min-height: 714px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 64px;
    max-width: calc(100% - 40px);
    margin: 0 auto;
    border-radius: 0 0 24px 24px;
  }
`;
