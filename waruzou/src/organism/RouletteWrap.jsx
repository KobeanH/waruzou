import { css } from "@emotion/css";
import { useRecoilValue } from "recoil";

import { ResultList } from "../atoms/list/ResultList";
import { AboutPerPerson } from "../atoms/text/AboutAmount";
import { ResultSuggest } from "../atoms/title/ResultSuggest";
import { aboutAmountState } from "../store/aboutAmountState";

export const RouletteWrap = () => {
  const aboutAmount = useRecoilValue(aboutAmountState);

  return (
    <div className={resultWrap}>
      <AboutPerPerson>
        今日のおごりは・・・
        {aboutAmount && <span>{aboutAmount}円</span>}
      </AboutPerPerson>
      <ResultList></ResultList>
    </div>
  );
};

const resultWrap = css`
  height: 40vh;
  box-sizing: border-box;
  margin: 0 auto 3.5vh;
  padding: 16px 32px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  @media (max-height: 740px) {
    height: 43vh;
    margin: 0 auto 3.5vh;
  }
`;
