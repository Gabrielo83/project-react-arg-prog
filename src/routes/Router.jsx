import { Route, Routes } from "react-router-dom";

import HomePg from "../pages/HomePg";
import AboutPg from "../pages/AboutPg";
import ContactPg from "../pages/ContactPg";
import TaskPg from "../pages/TaskPg";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePg />} />
      <Route path="/Tareas" element={<TaskPg />} />
      <Route path="/Contactos" element={<ContactPg />} />
      <Route path="/Acerca" element={<AboutPg />} />
    </Routes>
  );
};

export default Router;
