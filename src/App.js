import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Upper from './components/Upper';
import Marquee from './components/Marquee';
import Lower from './components/Lower';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Upper />
        <Marquee />
        <Lower />
        <Footer />
      </div>
    </div>
  );
}

export default App;
