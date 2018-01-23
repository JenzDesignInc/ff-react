import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import HorzMobileMenu from '../HorzMobileMenu/horzMobileMenu';
import Products from '../Products/products';
import Home from '../Home/home';
import AboutUs from '../AboutUs/aboutUs';
import FoundersClub from '../FoundersClub/foundersClub';
import ContactUs from '../ContactUs/contactUs';
import Footer from '../Footer/footer';


import ReactGA from 'react-ga';


ReactGA.initialize('UA-109671774-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export function fireTracking(nextState) {
  
     const { pathname } = nextState.location // this gives you the next URL
  
      ReactGA.pageview(pathname)
  
    }

class Main extends Component {

  render() {
    return (
        <div>
         <HorzMobileMenu/>
           <div className="wrapper">
           <Route path="/" onEnter={ fireTracking } exact component={Home} />
           <Route path="/Home" onEnter={ fireTracking } exact component={Home} />
           <Route path="/Products" onEnter={ fireTracking } exact component={Products} />
           <Route path="/AboutUs" onEnter={ fireTracking } component={AboutUs} />
           <Route path="/foundersClub" onEnter={ fireTracking } component={FoundersClub} />
       
           <Route path="/ContactUs" onEnter={ fireTracking } component={ContactUs} />
        
         </div>
         <Footer/>
       
         </div>
           
           );
  }
}

export default Main;


