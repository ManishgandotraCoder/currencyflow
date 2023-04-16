import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar.helper"
import router from "./route/route"
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#D9DDDC"
  }, [])
  return <Routes>
    {router.map(rout =>
      <>
        <Route key={rout.key} path={rout.path} element={<>{rout.toolbar ? <Topbar /> : ""}{rout.element}</>} />
      </>)}
  </Routes>
}
export default App