import React from 'react'
import Form from '../Form/form';




class ContactUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    render() {
        return (
            <div>
            <div className="products">
                    <div className="hero__products--content"> </div>
                </div>

                <div className="wrapper">
                    <div className="hero__products--content txt--color-white txt--weight-bold txt--align-center">
                        <h1 className="vr hero__title">Contact Us</h1>
                        <div className="hero__content--bkg">
                        <h2>Please contact us if you are interested in custom outdoor furniture to fit your individual needs.</h2>
                        </div>
                       
                       
                    </div>
                </div>
            
                <div className="form--wrapper padding--x1 card--shadow">
            


            <Form></Form>
    
            
            </div>
                        <div className="vr--x3"></div>

         
               
               
            </div>


        )
    }
}
export default ContactUs