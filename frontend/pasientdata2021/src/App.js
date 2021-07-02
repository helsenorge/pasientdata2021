
import './App.css';

import PageWrapper from './components/pages/PageWrapper';
import LandingPage from './components/pages/LandingPage';
import WelcomePage from './components/pages/WelcomePage';
import LoginPage from './components/pages/LoginPage';
import RegisterPage from './components/pages/RegisterPage';
import MapPage from './components/pages/MapPage';
import AddFriendsPage from './components/pages/AddFriendsPage';
import SettingsPage from './components/pages/SettingsPage';
import MyFriendsPage from './components/pages/MyFriendsPage';
import CreateTripPage from './components/pages/CreateTripPage';
import TripsPage from "./components/pages/TripsPage"
import TripInfo from './components/pages/TripInfoPage'
import UserInfoPage from './components/pages/UserInfoPage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import { useEffect } from 'react';


function App() {
  axios.defaults.baseURL = 'http://localhost:5000';
  
  
  useEffect(() => {
    if (localStorage.getItem('token')){
      axios.defaults.headers.common['Authorization'] = "Bearer ".concat(localStorage.getItem('token'));
      console.log(localStorage.getItem('token'))
    }
  }, []);

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
           <Route path="/tripinfo" exact render={()=> <TripInfo />} /> 
           <Route path="/settings" exact render={()=> <SettingsPage />} />
           <Route path="/myfriends" exact render={()=> <MyFriendsPage/>} />
           <Route path="/userinfo" exact render={()=> <UserInfoPage/>} />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
