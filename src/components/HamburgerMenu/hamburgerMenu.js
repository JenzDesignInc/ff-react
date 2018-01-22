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
    
      };

  render() {
    return (
        <div className="responsive__header global-header">
        <div className="flag flag--middle">
        icon here
        {/* Left Hand Social */}
          {/* <div className="flag__hd">

            <ul className="hList">
              <a href="" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickInsta() }}>             
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickInsta() }}>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" onClick={() => { this.handleClickFC() }}>
              </a>
            
            </ul>
          </div> */}
          {/* <!-- Horizontal Navigation List --> */}
          <div className="flag__ft txt--align-right">

            <nav role="navigation">
              <ul id="toggle-nav-1" className="header__mobileUtil">
                <li>
                  <button className="hamburger__container" ref="hamburger" onClick={this.handleToggle}>
                    <span id="hamburger-1" className="hamburger__navicon"></span>Menu
              </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* <!--Vertical Navigation List --> */}

        <div id="navMenu" >
          <div className="navMenu--vert nav--hide" ref="toggle">
            <nav role="navigation">
              <ul className="vList vList--piped navMenu--list">

                <li><a href='' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickItem1() }}>Item 1</a></li>
                <li><a href='' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickItem2() }}>Item 2</a></li>
                <li><a href='' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickItem3() }}>Item 3</a></li>
                <li><a href='' className="txt nav__link nav--inpage--item" onClick={() => { this.handleClickItem4() }}>Item 4</a></li>
              </ul>
            </nav>
          </div>
        </div>

      </div>

    )
  }
}

export default Header
