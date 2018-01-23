import React from 'react'
import { findDOMNode } from 'react-dom';
import ReactGA from 'react-ga';

import $ from 'jquery';
import Form from '../Form/form';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';




class FoundersClub extends React.Component {
    render() {
        return (
            <div>
              <div className="products">
                    <div className="hero__products--content"> </div>
                </div>

                <div className="wrapper">
                    <div className="hero__products--content txt--color-white txt--align-center">
                        <h1 className="vr hero__title">Founder's Club</h1>
                        <h2>Join us as a member of the Fire and Feast Founder's Club:
As a member, you will receive periodic updates regarding new product launches, Care and maintenance tips, recipes, BBQ and grilling insight, and recommendations for how you can enjoy lifeoutdoors
You will also receive exclusive discounts and coupons for Fire and Feast Products, including 20% your first order!
Become an exclusive "chair-holder".</h2>
                       
                    </div>
                </div>

                
               
            
              <div className="form--wrapper padding--x1">
            
              <h1 className="vr txt--align-center">Join the Founder's Club</h1>

              <Form></Form>
      
              
              </div>
              
            

            
                      

              <div className="vr--x3"></div>
               
               
            </div>


        )
    }
}
export default FoundersClub