import React from 'react'
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import ReactGA from 'react-ga';



class Header extends React.Component {
    handleClickItem1() {
        ReactGA.event({
          category: 'Navigation',
          action: 'Item1',
          label: 'Hamburger Menu'
        });
      }
    
      handleClickItem2() {
        ReactGA.event({
          category: 'Navigation',
          action: 'Item2',
          label: 'Hamburger Menu'
        });
      }
    
      handleClickItem3() {
        ReactGA.event({
          category: 'Navigation',
          action: 'Item3',
          label: 'Hamburger Menu'
        });
      }
    
      handleClickItem4() {
        ReactGA.event({
          category: 'Navigation',
          action: 'Item4',
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
            <div className="isHidden--medium">
              <ul className="hList hList--middle">
                <li>
                  <div className="header__logo">beacon</div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Horizontal Navigation List --> */}
          <div className="flag__ft txt--align-right">
            <div className="isHidden isVisible--medium">
              <nav role="navigation">
                <ul className="hList navMenu--horz">
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem1() }}>Item 1</a></li>
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem2() }}>Item 2</a></li>
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem3() }}>Item 3</a></li>
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem4() }}>Item 4</a></li>
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
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem1() }}>Item 1</a></li>
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem2() }}>Item 2</a></li>
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem3() }}>Item 3</a></li>
                <li><a href='' className="nav__link" onClick={() => { this.handleClickItem4() }}>Item 4</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
                <div className="headerLogo">

                <div className="header--fireFeast">
                

                </div>
                </div>
      </div>
      
    )
  }
}

export default Header
