import React from 'react'
import { findDOMNode } from 'react-dom';

class Intro extends React.Component {
    render() {
        return (
            <div className="card card--shadow vr--x2">
               <div class="card__body">
                    <p className="txt--size-18">
                    Created primarily from recycled plastic milk containers and other similar non-biodegradable plastics, HDPE “lumber” saves millions of containers from the landfill. HDPE provides countless possibilities for your craftsman grade, outdoor furniture needs.
                    </p>
                    <div className="txt--size-18">
                        Our site will feature periodic updates to highlight an expanding number of products.  Please contact us if you have a custom outdoor furniture project, Fire and Feast can help!  Join the Founder’s Club for periodic updates sent via email, including members only discounts and offers.
            </div>
               


                </div>
            </div>
        )
    }
}

export default Intro