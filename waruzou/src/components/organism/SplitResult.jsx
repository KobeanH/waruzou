import { css } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { AboutAmountState } from "../store/AboutAmountState";
import { AboutAmount } from "../atoms/text/AboutAmount";
import { ResultSuggest } from "../atoms/title/ResultSuggest";
import { ResultList } from "../atoms/list/ResultList";

export const SplitResult = () => {
  const aboutAmount = useRecoilValue(AboutAmountState);

  return (
    <div className={SplitResultWrap}>
      <AboutAmount>
        <span className={aboutAmountSmall}>一人あたり</span>
        {aboutAmount && <span>￥{aboutAmount}円</span>}
      </AboutAmount>
      <ResultSuggest>Suggest</ResultSuggest>
      <ResultList />
    </div>
  );
};

const SplitResultWrap = css`
  height: 280px;
  box-sizing: border-box;
  padding: 16px 32px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
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
