import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import {Gunkaniarray, Nigiriarray, Otherarray, Roliarray, Salatebiarray, Sasmelebiarray, Setebiarray} from './Constants/Menulist';
import {Makarray} from './Constants/Menulist';
import MessengerCustomerChat from 'react-messenger-customer-chat';

import {
  Routes, 
  Route,
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Info from './Info/Info';
import Interior from './Interior/Interior'
import Carousel from './Carousel/Carousel'
import Footer  from './Footer/Footer';
import Menu from './Menu/Menu'
import Roli from './Menu/Roli';
import Mealform from './Menu/Mealform';
import Nigiri from './Menu/Nigiri';
import Gunkani from './Menu/Gunkani'
import Others from './Menu/Others';
import Salatebi from './Menu/Salatebi'
import Setebi from './Menu/Setebi';
import Sasmelebi from './Menu/Sasmelebi';
import { useNavigate } from 'react-router';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import MapContainer from './GoogleMap/Googlemap';




function App() {

  let navigate = useNavigate();


  return (
    <>
    <div>
      
<Routes>
          <Route exact path="/Menu/sasmelebi" element={<Sasmelebi array={Sasmelebiarray}></Sasmelebi>}/>
          <Route exact path="/Menu/setebi" element={<Mealform array={Setebiarray}></Mealform>}/>
          <Route exact path="/Menu/salatebi" element={<Mealform array={Salatebiarray}></Mealform>}/>
          <Route exact path="/Menu/sxva" element={<Mealform array={Otherarray}></Mealform>}/>
          <Route exact path="/Menu/gunkani" element={<Mealform array={Gunkaniarray}></Mealform>}/>
          <Route exact path="/Menu/nigiri" element={<Mealform array={Nigiriarray}></Mealform>}/>
          <Route exact path="Menu/maki" element={<Mealform array={Makarray}></Mealform>}/>
          <Route exact path="Menu/roll" element={<Mealform array={Roliarray}></Mealform>}/>
          <Route exact path="/Menu" element={<Menu></Menu>}/>
          <Route exact path="/" element={
                      <React.Fragment>
                            <Header></Header>
                            <Info></Info>
                            <Interior></Interior>
                            <Carousel></Carousel> 
                            <MapContainer/>
                            <Footer></Footer>
                           
                      </React.Fragment>
                    }/>
</Routes> 

<MessengerCustomerChat
    themeColor={'#4E7E4E'}
    pageId="726112184110869"
    appId="422412572998369"
    loggedInGreeting='მოგესალმებათ უმაი სუში'
               
  />

    </div>
    {/* <MapContainer/> */}
</>
  );
}

export default App;
