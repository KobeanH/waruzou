// import { useState } from "react";
import { css } from "@emotion/css";
import yen from "../../img/yen.svg";
import { useRecoilState } from "recoil";
import { TotalState } from "../../store/totalState";

export const InputWrap = (props) => {
  const [total, setTotal] = useRecoilState(TotalState);
  // const [total, setTotal] = useState(""); //合計金額

  //合計金額入力欄
  const getValueFromTotal = (e) => {
    setTotal(() => e.target.value);
  };

  return (
    <div className={inputWrap}>
      <span className={total == true ? amountSpanOn : amountSpan}>
        <img className={amountImg} src={yen} alt="yen" />
      </span>
      <input
        className={amountInput}
        placeholder="金額"
        type="tel"
        onChange={getValueFromTotal}
        maxLength="8"
      />
    </div>
  );
};

const amountImg = css`
  margin: 12px 10px 6px;
  @media (max-height: 740px) {
    width: 18px;
  }
`;
const inputWrap = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  @media (max-height: 740px) {
    margin-bottom: 0.5vh;
  }
  @media (max-height: 740px) {
    margin-bottom: 1vh;
    width: 100%;
    gap: 4px;
  }
`;
const amountSpan = css`
  display: inline-block;
  background-color: #fff;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 1s;
`;
const amountSpanOn = css`
  display: inline-block;
  background-color: #e5eaf6;
  border-radius: 100%;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  transition: all 1s;
`;
const amountInput = css`
  font-size: 16px;
  width: 100%;
  padding: 1.5vh 16px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(128, 128, 128, 0.25);
  font-family: "Noto Sans JP", sans-serif;
  font-weight: bold;
  color: #808080;
  &::placeholder {
    color: rgba(128, 128, 128, 0.65);
  }
  @media (max-height: 740px) {
    width: 100%;
    font-size: 16px;
    padding: 1.5vh 8px;
    &::placeholder {
      font-size: 12px;
    }
  }
`;
