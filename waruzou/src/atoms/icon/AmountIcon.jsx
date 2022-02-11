import { css } from "@emotion/css";

export const AmountIcon = (props) => {
  const { fromGameMode } = props;
  const amountIcon = css`
    margin: 12px 10px 6px;
    @media (max-height: 740px) {
      width: 18px;
    }
    ${fromGameMode}
  `;

  return (
    <svg
      id="Layer_1"
      height="26"
      viewBox="0 0 24 24"
      width="26"
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      className={amountIcon}
    >
      <path
        fill="#808080"
        d="m22.61.208a1 1 0 0 0 -1.4.182l-9.21 11.97-9.208-11.97a1 1 0 0 0 -1.584 1.22l9.53 12.39h-4.738a1 1 0 0 0 0 2h5v2h-5a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h5a1 1 0 0 0 0-2h-5v-2h5a1 1 0 0 0 0-2h-4.738l9.53-12.39a1 1 0 0 0 -.182-1.402z"
      />
    </svg>
  );
};
