import { Routes, Route } from "react-router-dom";
import { Home } from "./assets/home/Home";
import { About } from "./assets/about/About";
import { Header } from "./assets/header/Header";
import { Footer } from "./assets/footer/Footer";
import { CreateYourPlan } from "./assets/plan/CreateYourPlan";
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
