import { css } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { showAnounceState } from "../../store/showAnounceState";

export const AnounceText = (props) => {
  const { children } = props;
  const showAnounce = useRecoilValue(showAnounceState);

  const anounceText = css`
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    display: block;
    width: 100%;
    margin: 0;
    text-align: center;
    color: #fff;
  `;
  const hideAnounceText = css`
    visibility: hidden;
    position: absolute;
    top: -70px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    display: block;
    width: 100%;
    margin: 0;
    text-align: center;
    color: #fff;
  `;

  return (
    <p className={showAnounce === true ? anounceText : hideAnounceText}>
      {children}
    </p>
  );
};
