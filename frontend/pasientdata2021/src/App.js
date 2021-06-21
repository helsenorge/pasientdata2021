
import './App.css';

import PageWrapper from './components/pages/PageWrapper';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Switch>
           <Route path="/" exact render={() => <LandingPage /> } />
           <Route path="/login" exact render={() => <LoginPage /> } />
           <Route path="/register" exact render={() => <RegisterPage /> } />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
