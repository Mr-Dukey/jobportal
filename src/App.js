import './App.css';
import Routing from './Routing';
import { AnimatePresence } from 'framer-motion'
import PortalHeader from './Components/OverAll Header/PortalHeader';
import APIContext from './Components/APIContext/APIContext';

function App() {
  return (
    <div className="App">
      <APIContext>
        <AnimatePresence>
          <PortalHeader />
          <Routing />
        </AnimatePresence>
      </APIContext>
    </div>
  );
}

export default App;
