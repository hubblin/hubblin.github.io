
import './App.scss';
import Navbar from './components/navbar';
import About from './components/about';
import Title from './components/title';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Navbar />
      <Title/>
      <div className="container">
        <About/>
        <Skills />
        <Portfolio/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
