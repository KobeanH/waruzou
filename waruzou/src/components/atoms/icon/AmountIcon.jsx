import { memo } from "react";
import { css } from "@emotion/css";

export const AmountIcon = memo((props) => {
  const { fromGameMode } = props;
  const amountIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    font-size: 2rem;
    font-weight: 500;
    ${fromGameMode}
  `;

  return <span className={amountIcon}>￥</span>;
});
