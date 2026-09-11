import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Product />
        <Experience />
        <Skills />
        <About />
      </main>
      <Contact />
    </div>
  );
}
