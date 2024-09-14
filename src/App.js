import './App.css';
import Routing from './Routing';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import PortalHeader from './Components/OverAll Header/PortalHeader';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <PortalHeader />
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
