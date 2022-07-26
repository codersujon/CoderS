//MAIN COMPONENTS
import Header from './components/Header/Index';
import Slider from './components/Slider/Index';
import About from './components/About/Index';
import Services from './components/Services/Index';
import Portfolio from './components/Portfolio/Index';
import Footer from './components/Footer/Index';
import Download from './components/Download/Index';

//BOOTSTRAP CSS FRAMEWORK
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <About />
      <Services />
      <Portfolio />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
