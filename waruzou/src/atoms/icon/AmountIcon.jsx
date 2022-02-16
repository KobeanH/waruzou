import { css } from "@emotion/css";

export const AmountIcon = (props) => {
  const { fromGameMode } = props;
  const amountIcon = css`
    display: flex;
    font-size: 2rem;
    font-weight: 500;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    @media (max-height: 740px) {
      width: 18px;
    }
    ${fromGameMode}
  `;

  return <span className={amountIcon}>￥</span>;
};
