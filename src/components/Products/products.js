import React from 'react'
import { findDOMNode } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';
import pattern1 from '../../assets/images/pattern_1.png'
import pattern2 from '../../assets/images/pattern_2.png'
import pattern3 from '../../assets/images/pattern_3.png'
import pattern4 from '../../assets/images/pattern_4.png'

import chair from '../../assets/images/chair.jpg'

class Products extends React.Component {
    render() {
        return (
            <div>

                <div className="products">
                    <div className="hero__products--content"> </div>
                </div>

                <div className="wrapper">
                    <div className="hero__products--content txt--color-white txt--align-center">
                        <h1 className="hero__title vr">Products</h1>
                        <div className="hero__content--bkg">
                        <h2>Introducing the Fire and Feast "Fireside" <br />a modern version of the classic adirondack chair design</h2>

                        </div>
                    </div>
                </div>


                <div className="isHidden isVisible--medium">

                    <div className="wrapper vr--x2">
                        <div class="card card--shadow">
                            <div class="card__body">

                                <div className="grid vr">
                                    <div className="grid__col grid__col--6of12">
                                        <img src={chair} alt="" />
                                        <h3 className="vr">Fireside - (in white/cedar 2 tone)</h3>
                                    </div>

                                    <div className="grid__col grid__col--6of12">

                                        <div class="vr">
                                            <h1>Price</h1>
                                            <ul className="hList hList--piped price--list vr">
                                                <li className="pr1"><span className="price">&nbsp;399</span>
                                                    <br />per chair

                                            </li>
                                                <li className="pr1"><span className="price">&nbsp;1399</span>
                                                    <br />for a set of 4 chairs
                                            </li>
                                                <li><span className="price">&nbsp;349</span>
                                                    <br />per chair for any order exceeding 4 chairs
                                            </li>
                                            </ul>
                                        </div>

                                        <ul className="hList hList--justify swatch--list vr txt--style-bold">
                                            <li> <img src={pattern1} alt="" className="img img--fill" />
                                                Cedar</li>
                                            <li> <img src={pattern2} alt="" className="img img--fill" />
                                                White</li>
                                            <li><img src={pattern3} alt="" className="img img--fill" />
                                                Weathered<br />Wood</li>
                                            <li><img src={pattern4} alt="" className="img img--fill" />
                                                Dove Gray</li>
                                        </ul>


                                        <ul className="vList vList--piped">
                                            <li> <p>The FIRESIDE is available in each of the 4 colors above, as well as any 2 tone combination of the 4. Please <a href="">contact us</a> to receive a free color sample to ensure that you select the desired color for your chairs.</p></li>
                                            <li> <p>Free ground shipping in the continental US.</p></li>
                                            <li>  <p>Our product line will continually expand throughout early 2018, join our exclusive <NavLink to="/FoundersClub" activeClassName="active">Founder's Club</NavLink> to receive information about new products and discounts for Fire and Feast Furniture.</p>
</li>
                                            <li><p>Please <NavLink to="/ContactUs" activeClassName="active">email </NavLink> or call <strong>844-733-4771</strong> (Toll-Free) 
                                            to order the Fireside or for a custom outdoor furniture consulation. 
                                            </p></li>
                                        </ul>
                                       
                                       
                                      
                                        


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="wrapper vr--x2">
                        <div className="card card--shadow">
                            <div className="card__body">
                                <h1>Why HDPE?</h1>
                                <p className="txt--size-18">Fire and Feast furniture is constructed using 18-8 stainless steel fasteners, thus preventing corrosion and rust on furniture hardware and more...</p>
                                <ul className="uList">
                                    <li className="">HDPE lumber stops hundreds of millions of plastic containers from entering the landfill waste stream through the production of recycled HDPE resin made from post consumer materials, thus supporting a net positive impact on the environment</li>
                                    <li className="">HDPE furniture is resistant to mold, mildew, and UV sunlight</li>
                                    <li className="">HDPE used in building Fire and Feast furniture does not splinter, warp, crack, or split, unlike wood</li>
                                    <li className="t">HDPE is uniform in color throughout the material and is subject to minimal fading, thus eliminating the need to paint</li>
                                    <li className="">The only maintenance needed is an occasional seasonal wash with a hose, mild soap, and a soft brush to rinse accumulated dirt</li>



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Desktop */}


                <div className="isHidden--medium">{/* Mobile */}
                <div className="card card--shadow vr--x2">
                <div className="card__body">
                    
                        <h1>Price</h1>
                       
                            <ul className="hList hList--piped hList--justify price--list--mobile vr txt--align-center">
                                <li className="txt--align-center"><span className="price">&nbsp;399</span>
                                    <br /><p className="txt--size-12">per chair</p>

                                            </li>
                                <li><span className="price">&nbsp;1399</span>
                                    <br /><p className="txt--size-12">for a set of 4 chairs</p>
                                            </li>
                                <li><span className="price">&nbsp;349</span>
                                    <br /><p className="txt--size-12">per chair for any orders exceeding 4 chairs</p>
                                            </li>
                            </ul>
                           

                            <img src={chair} alt="" />
                            <h4 className="vr">Fireside - (in white/cedar 2 tone)</h4>

                            <ul className="hList hList--justify swatch--list vr txt--style-bold">
                                            <li> <img src={pattern1} alt="" className="img img--fill" />
                                                Cedar</li>
                                            <li> <img src={pattern2} alt="" className="img img--fill" />
                                                White</li>
                                            <li><img src={pattern3} alt="" className="img img--fill" />
                                                Weathered<br />Wood</li>
                                            <li><img src={pattern4} alt="" className="img img--fill" />
                                                Dove Gray</li>
                                        </ul>



                                        <ul className="vList vList--piped">
                                        <li> <p>The FIRESIDE is available in each of the 4 colors above, as well as any 2 tone combination of the 4. Please <a href="">contact us</a> to receive a free color sample to ensure that you select the desired color for your chairs.</p></li>
                                        <li> <p>Free ground shipping in the continental US.</p></li>
                                        <li>  <p>Our product line will continually expand throughout early 2018, join our exclusive Founder's Club to receive information about new products and discounts for Fire and Feast Furniture.</p>
</li>
                                        <li><p>Please contact us if you are interested in Fire and Feast designing and building custom outdoor furniture to fit your individual needs.</p></li>
                                    </ul>
                                   
                        </div>
                        </div>

                        <div class="wrapper vr--x2">
                        <div className="card card--shadow">
                            <div className="card__body">
                                <h1>Why HDPE?</h1>
                                <p className="vr txt--size-18">Fire and Feast furniture is constructed using 18-8 stainless steel fasteners, thus preventing corrosion and rust on furniture hardware and more...</p>
                                <ul className="uList">
                                    <li className="">HDPE lumber stops hundreds of millions of plastic containers from entering the landfill waste stream through the production of recycled HDPE resin made from post consumer materials, thus supporting a net positive impact on the environment</li>
                                    <li className="">HDPE furniture is resistant to mold, mildew, and UV sunlight</li>
                                    <li className="">HDPE used in building Fire and Feast furniture does not splinter, warp, crack, or split, unlike wood</li>
                                    <li className="">HDPE is uniform in color throughout the material and is subject to minimal fading, thus eliminating the need to paint</li>
                                    <li className="">The only maintenance needed is an occasional seasonal wash with a hose, mild soap, and a soft brush to rinse accumulated dirt</li>



                                </ul>
                            </div>
                       
                    </div>
                    </div>
                    


                </div>  {/* End Mobile */}

            </div>



        )
    }
}
export default Products