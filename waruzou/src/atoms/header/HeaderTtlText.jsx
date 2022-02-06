import { css } from "@emotion/css";

export const HeaderTtlText = () => {
  return (
    <h2 className={headerTtlText}>
      わり<span className={headerTtlTextEn}>Can</span>
    </h2>
  );
};

const headerTtlText = css`
  color: #6f86d6;
  font-size: 16px;
`;
const headerTtlTextEn = css`
  color: #ffc56f;
`;
