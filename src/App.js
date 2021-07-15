import "assets/css/bootstrap.css";
import "assets/css/style.css";

import MainCategory from "parts/MainCategory";
import Navigation from "parts/Navigation";
import Hero from "parts/Hero";
import Category from "parts/Category";
import Community from "parts/Community";
import Testimoni from "parts/Testimoni";
import Footer from "parts/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navigation></Navigation>
        <Hero></Hero>
        <MainCategory></MainCategory>
        <Category></Category>
        <Community></Community>
        <Testimoni></Testimoni>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
