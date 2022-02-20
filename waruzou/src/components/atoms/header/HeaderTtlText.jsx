import { css } from "@emotion/css";

export const HeaderTtlText = () => {
  return (
    <h2 className={headerTtlText}>
      わり<span className={headerTtlTextEn}>Can</span>
    </h2>
  );
};

const headerTtlText = css`
  color: #000000;
  font-size: 2rem;
`;
const headerTtlTextEn = css`
  color: #ffb901;
  font-size: 2.2rem;
  font-family: "Noto Sans", sans-serif;
`;
