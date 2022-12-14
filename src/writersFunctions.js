import {CarouselItem} from 'react-bootstrap'

export function addCarouselImg(image, itemHeight, width){
    var imgHeight;
    width === ''? imgHeight = 640 : imgHeight = '';
    return(
        <CarouselItem key = {image} className = 'writerItem' style = {{
            height: itemHeight + 'px'
        }}>
            <img src = {image} width = {width + '%'} height = {imgHeight + 'px'}/>
        </CarouselItem>
    );
}