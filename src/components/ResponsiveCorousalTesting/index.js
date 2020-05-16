import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './images/1.jpg'
import img3 from './images/3.jpg'
import img2 from './images/2.jpg' 
class DemoCarousel extends Component {
    render() {
        return (
            <Carousel autoPlay>
                <div>
                    <img style={{width:`${500}px`}}src={img1} alt="1" />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img style={{width:`${500}px`}} src={img2} alt="2" />
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img style={{width:`${500}px`}} src={img3} alt="3" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};

export {DemoCarousel}
 
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
 
// Don't forget to include the css in your page
 
// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
