import React from 'react'
import { findDOMNode } from 'react-dom';
import ReactGA from 'react-ga';

import $ from 'jquery';
import FormClub from '../FormClub/formClub';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator } from 'react-material-ui-form-validator';




class FoundersClub extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <div className="foundersClub">
                    <div className="hero__founders--content"> </div>
                </div>

                <div className="wrapper">
                    <div className="hero__founders--content txt--color-white txt--align-center">
                        <h1 className="vr hero__title">Founder's Club</h1>
                        <div className="hero__content--bkg">
                            <h2>Become an exclusive "chair-holder"!</h2>
                        </div>

                    </div>
                </div>
                <div className="isHidden isVisible--medium">
                    <div className="form--wrapper padding--x1 card--shadow">

                        <div className="grid">
                            <div className="grid__col grid__col--6of12">
                                <h1 className="vr">Join the Founder's Club</h1>
                                <p>Join us as a member of the Fire and Feast Founder's Club. As a member, you will receive periodic updates regarding new product launches, care and maintenance tips, recipes, BBQ and grilling insight, and recommendations for how you can enjoy lifeoutdoors. </p>
                                <p>You will also receive exclusive discounts and coupons for Fire and Feast Products, including <strong>15% your first order!</strong>
                                </p>

                            </div>

                            <div className="grid__col grid__col--6of12">
                                <FormClub className=""></FormClub>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="isHidden--medium">
                    <div className="form--wrapper padding--x1 card--shadow">

                        <div className="grid">
                            <div className="grid__col grid__col--12of12">
                                <h1 className="vr">Join the Founder's Club</h1>
                                <p>Join us as a member of the Fire and Feast Founder's Club. As a member, you will receive periodic updates regarding new product launches, care and maintenance tips, recipes, BBQ and grilling insight, and recommendations for how you can enjoy lifeoutdoors. </p>
                                <p>You will also receive exclusive discounts and coupons for Fire and Feast Products, including <strong>15% your first order!</strong>
                                </p>

                            </div>

                            <div className="grid__col grid__col--12of12">
                                <FormClub className=""></FormClub>
                            </div>

                        </div>

                    </div>



                </div>


                <div className="vr--x3"></div>


            </div>


        )
    }
}
export default FoundersClub