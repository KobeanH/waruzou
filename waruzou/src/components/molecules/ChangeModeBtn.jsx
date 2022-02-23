import { memo } from "react";
import { Link } from "react-router-dom";

export const ChangeModeBtn = memo((props) => {
  const { toggleMode, modeOn, children } = props;
  return (
    <Link onClick={toggleMode} className={modeOn} to="/">
      {children}
    </Link>
  );
});
