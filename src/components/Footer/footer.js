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

                    <div class="grid grid--middle">
                        <div class="grid__col grid__col--6of12--medium txt--color-white">
                            <div className="vr"></div>
                            <div class="header--fireFeast footer__logo vr"></div>
                            <h3 class="txt--weight-semibold txt--size-28">Fire and Feast</h3>



                            <ul class="vList vList--tight txt--size-18 vr">
                                <li class="border--bottom vr"></li>
                                <li>Jeff Brown</li>
                                <li className="vr">Co-Founder and Owner</li>
                                <li>Fire and Feast Products, LLC</li>
                                <li>1000 Brown Street, #212</li>
                                <li  className="vr">Wauconda, IL 60084   </li>

                                <li>847-830-1249</li>
                                <li>
                                    <a href="mailto:jeff@fireandfeast.com?subject=Fire%20Cand%20Feast%20Inquiry" class="txt txt--color-white">jeff@thefireandfeast.com</a>
                                </li>

                            </ul>

                        </div>

                        <div class="grid__col grid__col--6of12--medium">


                            <nav role="navigation" class="vr footer__icons txt--align-right">

                                <ul class="hList">



                                    <a href="https://twitter.com/thefireandfeast" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='twitter' size='3x' className='fa fa-twitter fa-inverse fa-3x' /></li>
                                    </a>
                                    <a href="https://www.facebook.com/thefireandfeast/" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='facebook' size='3x' className='fa fa-facebook fa-inverse fa-3x' /></li>
                                    </a>

                                </ul>
                            </nav>

                        </div>

                    </div>

                </div>


            </footer>

        )
    }
}
export default Footer