import { Link } from "react-router-dom";

export const ChangeModeBtn = (props) => {
  const { toggleMode, modeOn, children } = props;
  return (
    <Link onClick={toggleMode} className={modeOn} to="/">
      {children}
    </Link>
  );
};
