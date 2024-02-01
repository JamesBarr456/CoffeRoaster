import { Routes, Route } from "react-router-dom";
import { About, CreateYourPlan, Footer, Header, Home } from "./assets";
export const App = () => {
  return (
    <>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/create" element={<CreateYourPlan />}></Route>
        </Routes>
        <Footer />
      </>
    </>
  );
};
