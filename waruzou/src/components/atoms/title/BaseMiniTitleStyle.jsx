import { css } from "@emotion/css";

export const BaseMiniTitleStyle = css`
  display: inline-block;
  color: #808080;
  padding: 3px 16px;
  border-radius: 20px;
  text-align: center;
  background-color: #fff;
  vertical-align: middle;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-size: 1.2rem;
  @media (max-height: 740px) {
    margin-bottom: 1.5vh;
  }
`;
