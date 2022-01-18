// store
import { useSelector, useDispatch } from "react-redux";
import { switchLan } from "../../store/actions";
// type
import { RootState } from "../../store/reducers/rootReducer";
// style 
import "./switchLanguage.scss"

function SwitchLanguage() {
  const zh = useSelector((state: RootState) => state.portfolio);
  const dispatch = useDispatch();
  return (
    <button className="switch-language" onClick={() => dispatch(switchLan(zh.meta.language))}>
      Switch Language
    </button>
  );
}

export default SwitchLanguage;