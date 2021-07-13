
import './App.css';

import PageWrapper from './components/pages/PageWrapper';
import LoginPage from './components/pages/LoginPage';

import AddFriendsPage from './components/pages/AddFriendsPage';
import SettingsPage from './components/pages/SettingsPage';
import MyFriendsPage from './components/pages/MyFriendsPage';
import TripsPage from "./components/pages/TripsPage"
import TripInfo from './components/pages/TripInfoPage'
import UserInfoPage from './components/pages/UserInfoPage';
import UserPage from './components/pages/UserPage'
import MapPageSwitch from './components/pages/MapPageSwitch';
import SpecificTripPage from './components/pages/SpecificTrip';



import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import axios from 'axios';

import { useEffect } from 'react';




function App() {
  localStorage.setItem('baseurl', 'http://localhost:5000')
  axios.defaults.baseURL = localStorage.getItem('baseurl');
  
  
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
           <Route path="/" exact render={() => <LoginPage /> } />
           <Route path="/login" exact render={() => <LoginPage /> } />

           <Route path="/map">
             <MapPageSwitch />
           </Route>
           <Route path="/addfriend" exact render={()=> <AddFriendsPage />} />
           <Route path="/trips" exact render={(renderProps)=> <TripsPage pathname={renderProps?.pathname?.location?.pathname}/>} />
           <Route path="/tripinfo" exact render={()=> <TripInfo />} /> 
           <Route path="/settings" exact render={()=> <SettingsPage />} />
           <Route path="/myfriends" exact render={()=> <MyFriendsPage/>} />
           <Route path="/userinfo" exact render={()=> <UserInfoPage/>} />
           <Route path="/userpage" exact render={()=> <UserPage/>} />
           <Route path="/specifictrip/:tripId" render={()=> <SpecificTripPage/>} />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
