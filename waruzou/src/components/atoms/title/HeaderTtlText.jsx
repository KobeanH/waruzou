import { css } from "@emotion/css";

import { Color } from "../../utility/Color";

export const HeaderTtlText = () => {
  return (
    <h2 className={headerTtlText}>
      わり<span className={headerTtlTextEn}>Can</span>
    </h2>
  );
};

const headerTtlText = css`
  color: ${Color.fontBlack};
  font-size: 2rem;
`;

const headerTtlTextEn = css`
  color: ${Color.mainColor};
  font-size: 2.2rem;
  font-family: "Noto Sans", sans-serif;
`;
