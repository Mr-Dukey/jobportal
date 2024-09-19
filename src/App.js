import './App.css';
import Routing from './Routing';
import { AnimatePresence } from 'framer-motion'
import PortalHeader from './Components/OverAll Header/PortalHeader';

function App() {
  return (
    <div className="App">
      <AnimatePresence>
        <PortalHeader />
        <Routing />
      </AnimatePresence>
    </div>
  );
}

export default App;
