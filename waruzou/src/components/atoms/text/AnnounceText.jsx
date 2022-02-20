import { css } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { ShowAnnounceState } from "../../store/ShowAnnounceState";

export const AnnounceText = (props) => {
  const { children, addStyle } = props;
  const showAnnounce = useRecoilValue(ShowAnnounceState);

  const announceText = css`
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    margin: 0;
    width: 100%;
    font-size: 2rem;
    color: #fff;
    text-align: center;
    white-space: pre-line;
    @media (max-height: 645px) {
      top: -65px;
    }
    @media (max-height: 553px) {
      top: -60px;
    }
    ${addStyle}
  `;
  const hideAnnounceText = css`
    visibility: hidden;
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    margin: 0;
    width: 100%;
    font-size: 2rem;
    color: #fff;
    text-align: center;
    @media (max-height: 553px) {
      top: -60px;
    }
  `;

  return (
    <p className={showAnnounce ? announceText : hideAnnounceText}>{children}</p>
  );
};
