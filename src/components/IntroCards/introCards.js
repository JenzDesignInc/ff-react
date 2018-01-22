import React from 'react'
import { findDOMNode } from 'react-dom';
import ReactGA from 'react-ga';
import hero1 from '../../assets/images/hero_1.jpg'
import hero2 from '../../assets/images/hero_2.jpg'
import hero3 from '../../assets/images/hero_3.jpg'

class IntroCards extends React.Component {
    render() {
        return (
            <div className="wrapper vr--x3">
                <div className="grid">
                    <div className="grid__col grid__col--4of12--medium">
                    <div className="card card--framed">
                        
                        <div className="card__header">
                        <h1>Quality</h1>
                        </div>
                       
                        <div className="card__body">
                        <img src={hero1} alt="" />
                        <div className="txt--size-20">Our dedication to craftsmanship ensures a durable and low maintenance piece of furniture, built for years of enjoyment</div>
                       </div>
                        
                        </div>

                    </div>

                    <div className="grid__col grid__col--4of12--medium">
                    <div className="card card--framed">
                        
                        <div className="card__header">
                        <h1>Comfort</h1>
                        </div>
                       
                        <div className="card__body">
                        <img src={hero3} alt="" />
                        <div className="txt--size-20">Finally, an adirondack chair that feels as good as it looks, built artfully to fit the contour of your body and legs</div>
                        </div>
                        </div>

                    </div>

                    <div className="grid__col grid__col--4of12--medium">
                        <div className="card card--framed">
                        
                        <div className="card__header">
                        <h1>Homegrown</h1>
                        </div>
                       
                        <div className="card__body">
                        <img src={hero2} alt="" />
                        <div className="txt--size-20">Domestically crafted and built from materials supplied by local, U.S. based companies</div>
                        </div>
                        
                        </div>

                    </div>
                    
                   

                </div>

            </div>


        )
    }
}
export default IntroCards