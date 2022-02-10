import { css } from "@emotion/css";

export const BaseMiniTitleStyle = css`
  display: inline-block;
  color: #808080;
  padding: 6px 24px;
  border-radius: 20px;
  text-align: center;
  background-color: #fff;
  vertical-align: middle;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  font-size: 12px;
  @media (max-height: 740px) {
    margin-bottom: 1.5vh;
  }
`;
