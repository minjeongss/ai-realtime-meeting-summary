import { Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Meeting from "../pages/Meeting";
import Summary from "../pages/Summary";

const Rotuer = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default Rotuer;
