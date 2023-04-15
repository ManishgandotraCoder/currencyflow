import {
  Route,
  Routes,
} from "react-router-dom";
import Topbar from "./components/topbar/topbar.helper"
import router from "./route/route"

const App = () => {
  return <Routes>
    {router.map(rout =>
      <>
        <Route key={rout.path} path={rout.path} element={<>{rout.toolbar ? <Topbar /> : ""}{rout.element}</>} />
      </>)}
  </Routes>
}
export default App