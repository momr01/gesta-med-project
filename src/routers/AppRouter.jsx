import { Routes, Route } from "react-router-dom";
import { Doctor } from "../pages";

const AppRouter = () => (
  <>
    <Routes>
      <Route path="/" element={<Doctor />}></Route>
    </Routes>
  </>
);

export default AppRouter;
