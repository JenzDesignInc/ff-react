import React, { Component } from 'react';
import HorzMobileMenu from './components/HorzMobileMenu/horzMobileMenu';
import Hero from './components/Hero/hero';
import HeroContent from './components/HeroContent/heroContent';
import IntroCards from './components/IntroCards/introCards';
import Intro from './components/Intro/intro';
import Footer from './components/Footer/footer';
import logo from './logo.svg';
import './assets/styles/app.css';
import 'font-awesome/css/font-awesome.min.css'

class App extends Component {
  render() {
    return (
      <div className="App page">
        <Hero></Hero>
        <HorzMobileMenu></HorzMobileMenu>
        <HeroContent></HeroContent>
        <IntroCards></IntroCards>
        <Intro></Intro>
        <Footer></Footer>


      </div>
    );
  }
}

export default App;
