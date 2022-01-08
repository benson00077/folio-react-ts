import React from "react";
import "./mainContainer.scss";
// store
import { useSelector, useDispatch } from "react-redux";
import { switchLan } from "../../store/actions";
// type
import { RootState } from "../../store/reducers/rootReducer";

function MainContainer() {
  const zh = useSelector((state: RootState) => state.portfolio );
  console.log(zh);
  const dispatch = useDispatch();

  return (
    <div className="scrollable">
      <button onClick={() => dispatch(switchLan(zh.meta.language))}>Switch Language</button>
      <div>
        <div className="text" style={{ height: "100vh" }}>
          {zh.intro.headline}
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
