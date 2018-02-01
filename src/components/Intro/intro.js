import React from 'react'
import { findDOMNode } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
class Intro extends React.Component {
    render() {
        return (
            <div className="card card--shadow vr--x2">
               <div class="card__body">
                    <p className="txt--size-18">
                    Created primarily from recycled plastic milk containers and other similar non-biodegradable plastics, HDPE “lumber” saves millions of containers from the landfill. HDPE provides countless possibilities for your craftsman grade, outdoor furniture needs.
                    </p>
                    <div className="txt--size-18">
                        Our site will feature periodic updates to highlight an expanding number of products.  Please <NavLink to="/ContactUs" activeClassName="active">contact us </NavLink> if you have a custom outdoor furniture project, Fire and Feast can help!  Join the <NavLink to="/FoundersClub" activeClassName="active">Founder’s Club</NavLink> for periodic updates sent via email, including members only discounts and offers.
            </div>
               


                </div>
            </div>
        )
    }
}

export default Intro