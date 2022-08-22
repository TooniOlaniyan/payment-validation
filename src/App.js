import './App.css'
import Nav from './shared/Nav';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo';
import BillingInfo from './pages/BillingInfo';
import ConfirmPayment from './pages/ConfirmPayment';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/personal-info' element={<PersonalInfo />} />
          <Route path='/billing-info' element={<BillingInfo />} />
          <Route path='/confirm-payment' element={<ConfirmPayment />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
