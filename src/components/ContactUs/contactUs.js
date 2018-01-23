import React from 'react'
import { findDOMNode } from 'react-dom';
import ReactGA from 'react-ga';

import $ from 'jquery';
import Form from '../Form/form';




class ContactUs extends React.Component {
    render() {
        return (
            <div>
            <div className="products">
                    <div className="hero__products--content"> </div>
                </div>

                <div className="wrapper">
                    <div className="hero__products--content txt--color-white txt--weight-bold txt--align-center">
                        <h1 className="vr hero__title">Contact Us</h1>
                       
                       
                    </div>
                </div>
            
                <div className="form--wrapper padding--x1">
            
            <h1 className="vr txt--align-center"></h1>

            <Form></Form>
    
            
            </div>
                        <div className="vr--x3"></div>

         
               
               
            </div>


        )
    }
}
export default ContactUs