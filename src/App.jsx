import { ToastContainer} from 'react-toastify';
import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Tickets from './components/Tickets/Tickets';
import { Suspense } from 'react';

const loadTickets = () => fetch('/ticktes.json')
.then((res) => res.json());

function App() {
 const ticketsPromise = loadTickets();

  return (
    <> 
      <Suspense fallback={"Loading Tickets"}>
              <Tickets tickets={ticketsPromise}/> 
      </Suspense>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
