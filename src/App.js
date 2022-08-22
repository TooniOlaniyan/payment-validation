import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import PersonalInfo from './pages/PersonalInfo';
import BillingInfo from './pages/BillingInfo';
import ConfirmPayment from './pages/ConfirmPayment';
import PaymentConfirmed from './pages/PaymentConfirmed';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/personal-info' element={<PersonalInfo />} />
          <Route path='/billing-info' element={<BillingInfo />} />
          <Route path='/confirm-payment' element={<ConfirmPayment />} />
          <Route path='/confirmed' element={<PaymentConfirmed/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
