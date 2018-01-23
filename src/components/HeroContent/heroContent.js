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
                
            <div className="hero--content txt--color-white txt--align-center txt--size-24 txt--style-bold">

            Fire and Feast Products designs and build outdoor furniture of the highest quality and comfort using high density polyethylene (HDPE). Created primarily from recycled plastic milk containers and other similar non-biodegradable plastics, HDPE “lumber” saves millions of containers from the landfill. HDPE provides countless possibilities for your craftsman grade, outdoor furniture needs.
            </div>
              
            </div>


        )
    }
}
export default HeroContent