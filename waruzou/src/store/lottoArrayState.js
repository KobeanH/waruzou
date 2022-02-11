import { atom } from "recoil";

export const LottoArrayState = atom({
  key: "LottoArrayState",
  default: [{ objAmount: "", objNumPpl: "" }],
});
