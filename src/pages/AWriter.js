import React from 'react';
import {
  useParams
} from "react-router-dom";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import Carousel from 'react-bootstrap/Carousel';

import { addCarouselImg } from '../writersFunctions';


import writersBackground from '../accerts/bg.jpg';
import { useTranslation} from "react-i18next";
import 'react-vertical-timeline-component/style.min.css'
import './css/kupalaStyles.css';

import Writer_DATA from '../writers.json';

function getDimensions(){
    var dimensions = [];
    for(var i = 0;i < 6;i++)
        dimensions.push(0);
    if(window.innerWidth >= 1000){
        dimensions[0] = 40;
        dimensions[2] = 80;
        dimensions[4] = '';
        dimensions[5] = 700;
    }
    else{
        dimensions[0] = 75;
        dimensions[2] = 100;
        dimensions[4] = 90;
        dimensions[5] = window.innerWidth * 1.4;
    }
    dimensions[1] = dimensions[0] / 100 * window.innerWidth / 1080 * 1015;
    if(window.innerWidth < 1645 && window.innerWidth > 1000)
        dimensions[3] = 0.25 * dimensions[1];
    else if(window.innerWidth >= 1645)
        dimensions[3] = 0.35 * dimensions[1];
    else
        dimensions[3] = 0.85 * dimensions[1];

    return dimensions
}

function generalInfo(writer){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t,i18n} = useTranslation();
    const lang = i18n.language
    const l=lang;
    var dimensions = getDimensions();
    var gallery = writer.galleryList;
    
    return(
        <>
            <div className = 'writerMainInfoBlock'>
                <img alt = 'Writer' src = {writer.mainimg} style = {{width: dimensions[0] + '%', height: dimensions[1] + 'px'}}/>
                <div className = 'writerMainInfo' style={{width: dimensions[0] + '%'}}>
                    <h2>{writer[l].title}</h2>
                    <p>{writer.dob}</p>
                    <div className='googleContainer'>
                        <h3>{t('VB')}</h3>
                        <iframe
                            allowFullScreen = {true}
                            allow = 'accelerator'
                            loading = 'lazy'
                            className='ytEmbed'
                            style={{width: dimensions[2] + '%',height: dimensions[3] + 'px'}}
                            src = {'' + writer.ytlink}/>
                        <h3>{t('PB')}</h3>
                        <div className='mapContainer'
                             style={{width: dimensions[2] + '%', height: dimensions[3] + 'px'}}>
                            <iframe src={writer.PlaceLink} frameBorder="0"
                                    style={{border: 0, borderRadius: '5px', width: '100%', height: '100%'}}
                                    allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='carouselTitle'>{t('LB')}</h2>
             <Carousel>
                {gallery.map((item, index) => {
                        return( addCarouselImg(item, dimensions[5], dimensions[4] ))})
                }

            </Carousel>
        </>
    );
}

function writerTimeline(writer){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {i18n} = useTranslation();
    const lang = i18n.language
    const l=lang;
    const histories = writer[l].histories
    return (
                <VerticalTimeline lineColor='#fff'>
                    {histories.map((item, index) => {
                        return(       
                             <VerticalTimelineElement
                             key = {index}
                                className="mainElement"
                                contentStyle = {{ background: '#009e4f', color:'#fff'}}
                                contentArrowStyle = {{ borderRight: '9px solid  #009e4f' }}
                                date = {item.eventDate}
                                iconStyle = {{ background: '#009e4f'}}
                            >
                                <h3>{item.firstTitle}</h3>
                                <h4>{item.secondTitle}</h4>
                                <p>{item.paragraph}</p>
                            </VerticalTimelineElement>           
                )})}
                </VerticalTimeline>
            );
}

export default function RightWriters(){
     const listOfWriters  = Writer_DATA;
     let { id } = useParams();
     if (id===undefined) id="kolas"
     const writer = listOfWriters.find((obj) => {
    return obj.writer === id;
  });
    return (
        <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
            {generalInfo(writer)}
            {writerTimeline(writer)}
        </section>
    );
}