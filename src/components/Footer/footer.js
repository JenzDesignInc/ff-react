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
                        <div class="grid__col grid__col--6of12--medium grid__col--12of12 txt--color-white">
                            
                            <div className="logo--fireFeast--footer"></div>
                            <h3 class="txt--weight-semibold txt--size-28 vr">Fire and Feast</h3>



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
                                <li  className="vr">Wauconda, IL 60084   </li>

                                <li>844-733-4771 (Toll-Free)</li>
                                <li>847-478-3313 (Main-Office)</li>
                                <li>847-478-3220 (Fax)</li>
                               

                            </ul>

                        </div>

                        <div class="grid__col grid__col--6of12--medium grid__col--12of12">

                        <div className="isHidden isVisible--medium">
                            <nav role="navigation" class="vr footer__icons txt--align-right">

                                <ul class="hList">

                                <a href="" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='instagram' size='3x' className='fa fa-instagram fa-inverse fa-3x' /></li>
                                    </a>

                                    <a href="https://twitter.com/thefireandfeast" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='twitter' size='3x' className='fa fa-twitter fa-inverse fa-3x' /></li>
                                    </a>
                                    <a href="https://www.facebook.com/thefireandfeast/" target="_blank" rel="noopener noreferrer">
                                        <li> <FontAwesome name='facebook' size='3x' className='fa fa-facebook fa-inverse fa-3x' /></li>
                                    </a>

                                </ul>
                            </nav>
                            </div>

                            <div className="isHidden--medium">
                            <nav role="navigation" class="vr footer__icons">

<ul class="hList">

<a href="https://instagram.com/fire_and_feast" target="_blank" rel="noopener noreferrer">
        <li> <FontAwesome name='instagram' size='3x' className='fa fa-instagram fa-inverse fa-3x' /></li>
    </a>

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

                </div>


            </footer>

        )
    }
}
export default Footer