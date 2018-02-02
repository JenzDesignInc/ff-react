import React from 'react'
import { findDOMNode } from 'react-dom';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';

//import BibCover from '../../assets/images/hero_bkg.jpg'

class Footer extends React.Component {
    render() {
        return (

            <footer class="page__footer">

                <div class="wrapper">
                    <div className="isHidden isVisible--medium">
                        <div className="grid grid--bottom txt--color-white">

                            <div className="grid__col grid__col--4of12">

                                <div className="logo--fireFeast--footer"></div>
                                <h3 class="txt--size-24 vr footer--txt--brand"><strong>FIRE AND FEAST</strong></h3>

                                <nav role="navigation" class="vr footer__icons">

                                    <ul class="hList">

                                        <a href="https://instagram.com/fire_and_feast" target="_blank" rel="noopener noreferrer">
                                            <li> <FontAwesome name='instagram' size='3x' className='fa fa-instagram' /></li>
                                        </a>

                                        <a href="https://twitter.com/thefireandfeast" target="_blank" rel="noopener noreferrer">
                                            <li> <FontAwesome name='twitter' size='3x' className='fa fa-twitter' /></li>
                                        </a>
                                        <a href="https://www.facebook.com/thefireandfeast/" target="_blank" rel="noopener noreferrer">
                                            <li> <FontAwesome name='facebook' size='3x' className='fa fa-facebook' /></li>
                                        </a>

                                    </ul>
                                </nav>

                            </div>

                            <div className="grid__col grid__col--4of12">

                                <ul class="vList vList--tight txt--size-18 vr">
                                    <li className=""><strong>Glen Frank</strong></li>
                                    <li>Co-Founder and Owner</li>
                                    <li class="vr">
                                        <a href="mailto:glen@thefireandfeast.com?subject=Fire%20and%20Feast%20Inquiry" class="txt txt--color-white">glen@thefireandfeast.com</a>
                                    </li>

                                    <li><strong>Jeff Brown</strong></li>
                                    <li>Co-Founder and Owner</li>
                                    <li class="vr">
                                        <a href="mailto:jeff@thefireandfeast.com?subject=Fire%20and%20Feast%20Inquiry" class="txt txt--color-white">jeff@thefireandfeast.com</a>
                                    </li>


                                </ul>

                            </div>

                            <div className="grid__col grid__col--4of12 txt--align--right">

                                <ul class="vList vList--tight txt--size-18 vr">
                                    <li>Fire and Feast Products, LLC</li>
                                    <li>1000 Brown Street, #212</li>
                                    <li className="vr">Wauconda, IL 60084   </li>

                                    <li>844-733-4771 (Toll-Free)</li>
                                    <li>847-478-3313 (Main-Office)</li>
                                    <li>847-478-3220 (Fax)</li>
                                </ul>

                            </div>



                        </div>
                    </div>

                    <div className="isHidden--medium">
                        <div class="wrapper  txt--align-center">
                            <div className="logo--fireFeast--footer "></div>
                            <h3 class="txt--size-24 vr footer--txt--brand"><strong>FIRE AND FEAST</strong></h3>
                            <nav role="navigation" class="vr footer__icons">

                                <ul class="hList">

                                    <a href="https://instagram.com/fire_and_feast" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='instagram' size='3x' className='fa fa-instagram' /></li>
                                    </a>

                                    <a href="https://twitter.com/thefireandfeast" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='twitter' size='3x' className='fa fa-twitter' /></li>
                                    </a>
                                    <a href="https://www.facebook.com/thefireandfeast/" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='facebook' size='3x' className='fa fa-facebook' /></li>
                                    </a>

                                </ul>
                            </nav>


                        </div>
                        <div className="grid grid--centered txt--color-white">
                            <div className="grid__col  txt--align-center">
                            <ul class="vList vList--tight txt--size-18 vr">
                                <li className=""><strong>Glen Frank</strong></li>
                                <li>Co-Founder and Owner</li>
                                <li class="vr">
                                    <a href="mailto:glen@thefireandfeast.com?subject=Fire%20and%20Feast%20Inquiry" class="txt txt--color-white">glen@thefireandfeast.com</a>
                                </li>

                                <li><strong>Jeff Brown</strong></li>
                                <li>Co-Founder and Owner</li>
                                <li class="vr">
                                    <a href="mailto:jeff@thefireandfeast.com?subject=Fire%20and%20Feast%20Inquiry" class="txt txt--color-white">jeff@thefireandfeast.com</a>
                                </li>
                                <li>Fire and Feast Products, LLC</li>
                                <li>1000 Brown Street, #212</li>
                                <li className="vr">Wauconda, IL 60084   </li>

                                <li>844-733-4771 (Toll-Free)</li>
                                <li>847-478-3313 (Main-Office)</li>
                                <li>847-478-3220 (Fax)</li>

                            </ul>


                            </div>

                        </div>

                    </div>

                </div>

            </footer>

        )
    }
}
export default Footer