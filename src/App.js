import './App.css';
import Footer from './componentes/section/Footer';
import Navbar from './componentes/section/Navbar';
import Presetation from './componentes/section/Presetation';
import Skills from './componentes/section/Skills';
import Projects from './componentes/section/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presetation/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App;
