import React from 'react'
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Hero from '../Hero/hero';
import HeroContent from '../HeroContent/heroContent';
import IntroCards from '../IntroCards/introCards';
import Intro from '../Intro/intro';

class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
        <Hero></Hero>
        <HeroContent></HeroContent>
        <IntroCards></IntroCards>
        <Intro></Intro>
               
            </div>


        )
    }
}
export default Home