import "./App.css";
import { Features } from "./components/Features";
import { FeatureSectionsType2 } from "./components/FeatureSectionsType2";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TestimonialSection } from "./components/TestimonialSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <FeatureSectionsType2 />
      <TestimonialSection />
    </>
  );
}

export default App;
