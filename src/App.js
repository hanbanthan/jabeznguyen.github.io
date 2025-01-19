import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutMe />
    </div>
    
  );
}
export default App;