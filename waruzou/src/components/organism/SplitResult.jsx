import { memo } from "react";
import { css } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { AboutAmountState } from "../store/aboutAmountState";
import { BlackText } from "../atoms/text/BlackText";
import { ResultSuggest } from "../atoms/title/ResultSuggest";
import { ResultList } from "../atoms/list/ResultList";
import { Color } from "../utility/Color";

export const SplitResult = memo(() => {
  const aboutAmount = useRecoilValue(AboutAmountState);

  return (
    <div className={SplitResultWrap}>
      <BlackText>
        <span className={aboutAmountSmall}>一人あたり</span>
        {aboutAmount && <span>￥{aboutAmount}円</span>}
      </BlackText>
      <ResultSuggest>Suggest</ResultSuggest>
      <ResultList />
    </div>
  );
});

const SplitResultWrap = css`
  height: 280px;
  box-sizing: border-box;
  padding: 16px 32px;
  border-radius: 12px;
  background-color:  ${Color.backGroundWhite};
  box-shadow: ${Color.mainShadow};
  @media (max-height: 553px) {
    height: 260px;
  }
  @media (min-width: 430px) {
    height: 38vh;
  }
`;
const aboutAmountSmall = css`
  font-size: 1.2rem;
`;
