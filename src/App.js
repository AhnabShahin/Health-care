import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Banner from './Pages/Home/Banner/Banner';
import GoodAt from './Pages/Home/GoodAt/GoodAt';
import Specialists from './Pages/Home/Specialists/Specialists';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/">
          <Banner></Banner>
          <GoodAt></GoodAt>
          <Specialists></Specialists>
        </Route>
      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
