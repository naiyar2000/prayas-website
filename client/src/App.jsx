import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Bookingspage from './Pages/Bookingspage';
import Paymentspage from './Pages/Paymentspage';
import Servicepage from './Pages/Servicepage';
import NavigationSidebar from './Components/NavigationSidebar';
import ComplaintQueriesPage from './Pages/ComplaintQueriesPage';
import AddInformationPage from './Pages/AddInformationPage';

function App() {
  return (
         
      <Router>
        <div style={{display: 'flex'}}>
          <div style={{flex: 1, backgroundColor: '#5D5FEF'}}>
              <NavigationSidebar/>
          </div>
          <div style={{flex: 4}}>
            <Route exact path="/" component={Servicepage}/>
            <Route exact path="/payment" component={Paymentspage}/>
            <Route exact path="/booking" component={Bookingspage}/>
            <Route exact path="/complaintQueries" component={ComplaintQueriesPage}/>
            <Route exact path="/addInformation" component={AddInformationPage}/>
          </div>
        </div>
      </Router>
  );
}

export default App;
