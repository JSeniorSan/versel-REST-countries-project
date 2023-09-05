import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Api } from "./API/Api";
import Header from "./components/Header";
import MainBlock from "./components/MainBlock";
import Wrapper from "./components/Wrapper";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Api());
  }, []);

  return (
    <>
      <Wrapper />
    </>
  );
}

export default App;
