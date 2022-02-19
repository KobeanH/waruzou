import { css } from "@emotion/css";

export const PersonIcon = (props) => {
  const { fromGameMode } = props;

  const personIcon = css`
    display: flex;
    font-size: 2rem;
    font-weight: 500;
    width: 20px;
    justify-content: center;
    align-items: center;
    margin: 10px;
    ${fromGameMode}
  `;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={personIcon}
    >
      <g id="_01_align_center" data-name="01 align center">
        <path
          fill="#808080"
          d="M21,24H19V18.957A2.96,2.96,0,0,0,16.043,16H7.957A2.96,2.96,0,0,0,5,18.957V24H3V18.957A4.963,4.963,0,0,1,7.957,14h8.086A4.963,4.963,0,0,1,21,18.957Z"
        />
        <path d="M12,12a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,12ZM12,2a4,4,0,1,0,4,4A4,4,0,0,0,12,2Z" />
      </g>
    </svg>
  );
};
