import './App.css';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
