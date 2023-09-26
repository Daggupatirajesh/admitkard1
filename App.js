import React from 'react';
import './App.css';
import { BrowserRouter,Switch,Route} from 'react-router-dom';
import MobileNumberScreen from './components/MobileNumber/MobileNumberScreen';
import OTPVerificationScreen from './components/OTPScreen/OTPVerificationScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MobileNumberScreen} />
          <Route path="/otp" component={OTPVerificationScreen} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

