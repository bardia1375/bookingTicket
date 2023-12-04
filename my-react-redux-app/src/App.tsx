// src/App.tsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./redux/actions/userActions"; // Create this action
import { RootState } from "./redux/types"; // Create this type

const App: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // dispatch(fetchUserData());
  }, [dispatch]);

  return <div>Helo world</div>;
};

export default App;
