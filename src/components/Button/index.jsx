import React, { useState } from "react";
import style from "./style.module.css";
import { useCustomState } from "../../useCustomState";
import cn from "classnames";

function Button() {
  const { status, update, isLoading } = useCustomState();

  return (
    <div
      className={cn(status ? style.buttonOn : style.buttonOff)}
      onClick={update}
    >
      <div className={status ? style.buttonBodyOn : style.buttonBodyOff}>
        <div className={status ? style.buttonFrontOn : style.buttonFrontOff}>
          <div
            className={status ? style.buttonCenterOn : style.buttonCenteOff}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Button;
