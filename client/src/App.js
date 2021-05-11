import { useEffect } from "react";
import Button from "./components/Button";
import "./general-style.css";
import { getStatus } from "./redux/actions/statusAcrions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state);

  useEffect(() => {
    setInterval(() => {
      dispatch(getStatus());
    }, 1000);
  }, [status]);

  return (
    <div className="bodybutton">
      <div className="headerbutton">
        Если кнопка изменила цвет сама, значит кто-то тоже на нее
        нажимает)
      </div>
      <Button />
    </div>
  );
}

export default App;
