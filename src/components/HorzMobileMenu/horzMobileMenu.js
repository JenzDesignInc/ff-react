import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import ReactGA from 'react-ga';



class Header extends React.Component {

  
  handleClickProducts() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Products',
      label: 'Hamburger Menu'
    });
  }

  handleClickAboutUs() {
    ReactGA.event({
      category: 'Navigation',
      action: 'About Us',
      label: 'Hamburger Menu'
    });
  }

  handleClickFoundersClub() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Founders Club',
      label: 'Hamburger Menu'
    });
  }

  handleClickContactUs() {
    ReactGA.event({
      category: 'Navigation',
      action: 'Contact Us',
      label: 'Hamburger Menu'
    });
  }

  handleToggle = () => {
    const el = findDOMNode(this.refs.toggle);
    $(el).slideToggle();
    $(el).removeClass("nav--hide");
    $(el).addClass("hamburger__navicon--isActive");

  };

  render() {
    return (
      <div>
        <div className="responsive__header global-header">
        <div class="wrapper">
          <div className="flag flag--middle">
            <div className="flag__hd">
              <div className="isHidden isVisible--medium">
                <ul className="hList hList--middle">
                  {/* Original */}
                  {/* <li>
                  <div className="header__logo">icon</div>
                </li> */}
                  {/* Original */}
                  {/* <!--Optional title and divider bar--> */}
                  {/* <li className="header__divider"></li>
                <li className="header__title">App Title</li> */}
                  {/* <!--Optional title and divider bar--> */}
                </ul>
              </div>
              {/* <div className="isHidden--medium"> */}
                <ul className="hList hList--middle">
                  <li>
                    <NavLink to="/Home" activeClassName="active">
                      <div className="logo--fireFeast--flameOnly"></div>
                    </NavLink>

                  </li>
                </ul>
              {/* </div> */}
            </div>
            {/* <!-- Horizontal Navigation List --> */}
            <div className="flag__ft txt--align-right">
              <div className="isHidden isVisible--medium">
                <nav role="navigation">
                  <ul className="hList navMenu--horz">

                    <li className="nav__link grow"><NavLink to="/Products" activeClassName="active" onClick={() => { this.handleClickProducts() }}>Products</NavLink></li>
                    <li className="nav__link grow"><NavLink to="/AboutUs" activeClassName="active" onClick={() => { this.handleClickAboutUs() }}>About Us</NavLink></li>
                    <li className="nav__link grow"><NavLink to="/FoundersClub" activeClassName="active" onClick={() => { this.handleClickFoundersClub() }}>Founders
                Club</NavLink></li>
                <li className="nav__link grow"><NavLink to="/ContactUs" activeClassName="active" onClick={() => { this.handleClickContactUs() }}>Contact Us</NavLink></li>

                  </ul>
                </nav>
              </div>
              <div className="isHidden--medium">
                <ul id="toggle-nav-1" className="header__mobileUtil">
                  <li>
                    <button className="hamburger__container" ref="hamburger" onClick={this.handleToggle}>
                      <span id="hamburger-1" className="hamburger__navicon"></span>Menu
          </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!--Vertical Navigation List --> */}
          <div className="isHidden--medium">
            <div id="navMenu">
              <div id="navMenu-vert-1" className="togglePanel nav--hide" ref="toggle">
                <nav role="navigation">
                  <ul className="vList vList--piped navMenu--vert">
                  <li><NavLink to="/Products" activeClassName="active" onClick={() => { this.handleClickProducts() }}>Products</NavLink></li>
                  <li><NavLink to="/AboutUs" activeClassName="active" onClick={() => { this.handleClickAboutUs() }}>About Us</NavLink></li>
                  <li><NavLink to="/FoundersClub" activeClassName="active" onClick={() => { this.handleClickFoundersClub() }}>Founders
              Club</NavLink></li>
                  <li><NavLink to="/ContactUs" activeClassName="active" onClick={() => { this.handleClickContactUs() }}>Contact Us</NavLink></li>

                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        </div>
        {/* <div className="headerLogo">
          <NavLink to="/Home" activeClassName="active">
          <div className="logo--fireFeast--flameOnly"></div>
         
          </NavLink>

        </div> */}
      </div>

    )
  }
}

export default Header
