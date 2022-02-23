import { memo } from "react";
import { css, keyframes } from "@emotion/css";

export const RouletteText = memo((props) => {
  const { children, startRoulette } = props;

  return <p className={startRoulette ? animeOff : animeOn}>{children}</p>;
});

const rouletteTextAnime = keyframes`
25%{
  transform: scale(1.2);
}
50%{
  transform: scale(1);
}
75%{
  transform: scale(1.2);
}
100%{
  transform: scale(1);
}
`;
const animeOn = css`
  margin-bottom: 2.5vh;
  font-size: 24px;
  color: #ffb901;
  text-align: center;
  white-space: pre-wrap;
  animation: ${rouletteTextAnime} 1.2s;
  will-change: animation;
`;
const animeOff = css`
  margin-bottom: 2.5vh;
  font-size: 24px;
  color: #ffb901;
  text-align: center;
  white-space: pre-wrap;
`;
