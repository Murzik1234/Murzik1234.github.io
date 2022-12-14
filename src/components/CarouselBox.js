import React, {Component} from 'react';
import AWriter from "../pages/AWriter";
import HomeCarousel from "../pages/homeCarousel";



class CarouselBox extends Component {
    render() {
        return (
            <div>
                <HomeCarousel/>
                <AWriter writer = "kupala"/>
            </div>
        );
    }
}

export default CarouselBox;