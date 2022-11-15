import { Routes, Route } from "react-router-dom";
import { DoctorPage } from "../pages";

const AppRouter = () => (
  <>
    <Routes>
      <Route path="/" element={<DoctorPage />}></Route>
    </Routes>
  </>
);

export default AppRouter;
