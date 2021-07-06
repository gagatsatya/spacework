import "assets/css/bootstrap.css";
import "assets/css/style.css";

import Navigation from "parts/Navigation";
import Hero from "parts/Hero";

function App() {
  return (
    <div className="container">
      <Navigation></Navigation>
      <Hero></Hero>
    </div>
  );
}

export default App;
