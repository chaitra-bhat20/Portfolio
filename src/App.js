import "./App.css";
import { Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import { Footer } from "./components/footer/Footer";
import { HomeContainer } from "./components/home-container/HomeContainer";
import { TopMenu } from "./components/top-menu/TopMenu";
import About from "./components/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <div data-testid="bg-image" id="bimg">
        <TopMenu />
        <div className="row app-container">
          {/* <div className="col-md-12"> */}
          {/* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; */}
          {/* <HomeContainer /> */}
          {/* </div> */}
          <Routes>
            <Route path="/skills" element={<Skills />} />
            <Route path="/home" element={<HomeContainer />} />
            <Route path="/" element={<HomeContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
