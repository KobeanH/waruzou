import { css } from "@emotion/css";

export const LeftLose = (props) => {
  const { i, itemAmount, itemPeople } = props;
  return (
    <div className={aaa} key={i}>
      金額:<span>{itemAmount}</span> 円、 人数: <span>{itemPeople}</span>
    </div>
  );
};
const aaa = css`
  color: red;
`;
