import { StateContext } from "./StateProvider";
import { useContext } from "react";

export const useCustomState = () => useContext(StateContext);
