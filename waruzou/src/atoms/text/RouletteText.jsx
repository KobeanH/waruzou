import { css, keyframes } from "@emotion/css";

export const RouletteText = (props) => {
  const { children, start } = props;

  return (
    <p className={start == true ? resultItemmm : resultItem}>{children}</p>
  );
};
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
const resultItem = css`
  margin-bottom: 2.5vh;
  font-size: 24px;
  color: #ffb901;
  text-align: center;
  white-space: pre-wrap;
  animation: ${rouletteTextAnime} 1.2s;
  will-change: ${rouletteTextAnime};
  will-change: animation;
  perspective: 1000;
`;
const resultItemmm = css`
  margin-bottom: 2.5vh;
  font-size: 24px;
  color: #ffb901;
  text-align: center;
  white-space: pre-wrap;
`;
