import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import GoodAt from './Pages/Home/GoodAt/GoodAt';
import Specialists from './Pages/Home/Specialists/Specialists';
import LatestNews from './Pages/Home/LatestNews/LatestNews';
import PatientsReviews from './Pages/Home/PatientsReviews/PatientsReviews';
import Footer from './Shared/Footer/Footer';
import DoctorDetails from './Pages/Doctors/DoctorDetails/DoctorDetails';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Appointment from './Pages/Appointment/Appointment';

import NotFound from './NotFound/NotFound';


function App() {
  const [loadData, setLoadData] = useState({});
  useEffect(() => {
    async function getData() {
      const res = await axios.get('./Demodata.json')
      setLoadData(res);
    }
    getData();
  }, [])
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Banner></Banner>
            <GoodAt></GoodAt>
            <Specialists loadData={loadData}></Specialists>
            <LatestNews></LatestNews>
            <PatientsReviews></PatientsReviews>
          </Route>
          <PrivateRoute exact path="/news">
            <LatestNews loadData={loadData}></LatestNews>
          </PrivateRoute>

          <Route exact path="/home">
            <Banner></Banner>
            <GoodAt></GoodAt>
            <Specialists loadData={loadData}></Specialists>
            <LatestNews></LatestNews>
            <PatientsReviews></PatientsReviews>
          </Route>
          <PrivateRoute path="/doctors">
            <Specialists loadData={loadData}></Specialists>
          </PrivateRoute>
          <PrivateRoute path="/doctor/:id">
            <DoctorDetails loadData={loadData}></DoctorDetails>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <Route>

            <NotFound path="*"></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
