import React from 'react'
import { findDOMNode } from 'react-dom';
import ReactGA from 'react-ga';


//import BibCover from '../../assets/images/hero_bkg.jpg'

class HeroContent extends React.Component {
    render() {
        return (
            <div className="wrapper vr--x2">
            <div className="txt--align-center"> 
            <div className="logo--fireFeast--chair--white"></div>
            </div>
           <div className="hero__content--bkg"> 
            <div className="hero--content txt--color-white txt--align-center txt--size-24 txt--style-bold">

            <h2>Fire and Feast Products designs and builds outdoor furniture of the highest quality and comfort using high density polyethylene (HDPE). </h2>
            </div>
            </div>    
            </div>


        )
    }
}
export default HeroContent