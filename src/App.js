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
          <div className='portal-container'>
            <header className='main-header'>
              <PortalHeader />
            </header>
            <div className='main-content'>
              <Routing />
            </div>
          </div>
        </AnimatePresence>
      </APIContext>
    </div>
  );
}

export default App;
