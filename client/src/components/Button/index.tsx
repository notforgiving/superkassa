import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./style.module.css";
import { postStatus } from "./../../redux/actions/statusAcrions";

function Button() {
  const dispatch = useDispatch();
  const { status }: any = useSelector((state) => state);
  const [position, setPosition] = useState(status);

  useEffect(() => {
    setPosition(status);
  }, [status]);

  const handleSwitch = (): void => {
    dispatch(postStatus(!position));
  };

  return (
    <button
      onClick={handleSwitch}
      className={position ? style.buttonOn : style.buttonOff}
    >
      <div className={position ? style.buttonBodyOn : style.buttonBodyOff}>
        <div className={position ? style.buttonFrontOn : style.buttonFrontOff}>
          <div
            className={position ? style.buttonCenterOn : style.buttonCenteOff}
          ></div>
        </div>
      </div>
    </button>
  );
}

export default Button;
