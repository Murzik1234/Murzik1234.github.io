import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import Developers from "./Developers";

class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>
                <Developers/>
            </>
        );
    }
}

export default Home;