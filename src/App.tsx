import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-200">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Courses />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
