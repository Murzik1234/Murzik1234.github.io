import React, {Component} from 'react';
import writersBackground from '../accerts/dev.jpg';
import 'react-vertical-timeline-component/style.min.css'
import './css/developersStyle.css'
import Dasha from '../accerts/d.jpg';
import Sasha from '../accerts/s.jpg';
import Sergey from '../accerts/sergey.jpg';
import {useTranslation} from "react-i18next";
import Developer from "./Developer";

export default function homeCarousel(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
        var mainImgWidth, mainImgHeight;
        if(window.innerWidth >= 1000){
            mainImgWidth = 40;
        }
        else{
            mainImgWidth = 75;
        }
        mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;
        return (
                <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
                    <div className = 'writerMainInformation' >
                        <h2>{t('Team')}</h2>
                    </div>
                    <div className="row">
                        <Developer photo={Dasha} name="Dasha" ghref="Murzik1234"></Developer>
                        <Developer photo={Sasha} name="Sasha" ghref="CinderAle"></Developer>
                        <Developer photo={Sergey} name="Sergey" ghref="NotYM"></Developer>
                    </div>
                </section>
        )
    }
