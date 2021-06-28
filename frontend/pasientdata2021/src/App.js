
import './App.css';

import PageWrapper from './components/pages/PageWrapper';
import LandingPage from './components/pages/LandingPage';
import WelcomePage from './components/pages/WelcomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MapPage from './components/pages/MapPage';
import CreateTripPage from './components/pages/CreateTripPage';
import AddFriendsPage from './components/pages/AddFriendsPage';
import TripsPage from "./components/pages/TripsPage"
import SettingsPage from './components/pages/SettingsPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Switch>
           <Route path="/" exact render={() => <LandingPage /> } />
           <Route path="/welcome" exact render={() => <WelcomePage /> } />
           <Route path="/login" exact render={() => <LoginPage /> } />
           <Route path="/register" exact render={() => <RegisterPage /> } />
           <Route path="/map" exact render={() => <MapPage /> } />
           <Route path="/createTrip" exact render={() => <CreateTripPage /> } />
           <Route path="/addfriend" exact render={()=> <AddFriendsPage />} />
           <Route path="/trips" exact render={()=> <TripsPage />} />

           <Route path="/settings" exact render={()=> <SettingsPage />} />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
