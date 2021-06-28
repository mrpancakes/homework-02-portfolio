import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Home />
        <About />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
