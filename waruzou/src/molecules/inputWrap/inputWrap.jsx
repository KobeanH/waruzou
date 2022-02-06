import { css } from "@emotion/css";
import { useRecoilState } from "recoil";
import { TotalState } from "../../store/totalState";
import { SplitModeInput } from "../../atoms/input/SplitModeInput";
import { Icon } from "../../atoms/icon/icon";

export const InputWrap = () => {
  const [total, setTotal] = useRecoilState(TotalState);

  //合計金額入力欄
  const getValueFromTotal = (e) => {
    setTotal(() => e.target.value);
  };

  return (
    <div className={inputWrap}>
      <Icon ppl={total}>
        <svg
          id="Layer_1"
          height="26"
          viewBox="0 0 24 24"
          width="26"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
          className={amountImg}
        >
          <path
            fill="#808080"
            d="m22.61.208a1 1 0 0 0 -1.4.182l-9.21 11.97-9.208-11.97a1 1 0 0 0 -1.584 1.22l9.53 12.39h-4.738a1 1 0 0 0 0 2h5v2h-5a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h5a1 1 0 0 0 0-2h-5v-2h5a1 1 0 0 0 0-2h-4.738l9.53-12.39a1 1 0 0 0 -.182-1.402z"
          />
        </svg>
      </Icon>
      <SplitModeInput
        placeholder={"金額"}
        type={"tel"}
        onChange={getValueFromTotal}
        maxLength={"8"}
      ></SplitModeInput>
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
