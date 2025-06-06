import { Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Meeting from "../pages/Meeting";

const Rotuer = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/meet" element={<Meeting />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Rotuer;
