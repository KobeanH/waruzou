import { css } from "@emotion/css";

export const LeftLose = (props) => {
  const { i, itemAmount, itemPeople } = props;
  return (
    <li className={LeftLoseItem} key={i}>
      <span>{itemAmount}</span>×<span>{itemPeople}</span>
    </li>
  );
};
const LeftLoseItem = css`
  color: #808080;
  font-weight: bold;
  list-style: none;
  width: 100px;
  font-size: 20px;
  text-align: center;
`;
