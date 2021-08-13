import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bookingspage from './Pages/Bookingspage';
import Paymentspage from './Pages/Paymentspage';
import Servicepage from './Pages/Servicepage';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Servicepage}/>
      <Route exact path="/payment" component={Paymentspage}/>
      <Route exact path="/booking" component={Bookingspage}/>
    </Router>
  );
}

export default App;
