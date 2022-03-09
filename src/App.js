import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Components/Navbar';
import Intro from './Components/Intro';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import LightboxPage from './Components/Projects';

function App() {
  return (
    <div className="App">
      < Intro />
      <Navbar1 />
      <About />
      <LightboxPage />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
