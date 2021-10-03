import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Summary from './steps/Summary';
import Selectcard from './steps/Selectcard';
import Addcard from './steps/Addcard';
import Checkout from './steps/Checkout';
import Basket from './steps/Basket';


function App() {
  return (

<Router>
  <Route exact path="/" component={Basket} />
  <Route exact path="/summary" component={Summary} />
  <Route path="/selectcard" component={Selectcard} />
  <Route path="/addcard" component={Addcard} />
  <Route path="/checkout" component={Checkout} />
</Router>

  );
}

export default App;
