import React, {Component} from 'react';
import writersBackground from '../accerts/f.jpg';
import 'react-vertical-timeline-component/style.min.css'
import './css/homePage.css'
import {useTranslation} from "react-i18next";


export default function homeCarousel(){

        var mainImgWidth, mainImgHeight;
        if(window.innerWidth >= 1000){
            mainImgWidth = 40;
        }
        else{
            mainImgWidth = 75;
        }
        mainImgHeight = mainImgWidth / 100 * window.innerWidth / 1080 * 1015;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
        return (
            <section style={{backgroundImage:'url(' + writersBackground + ')'}}>
                    <div className = 'writerMainI' >
                        <h1>{t('p')}</h1>
                        <h2>{t('1r')}</h2>
                        <h2>{t('2r')}</h2>
                        <h2>{t('3r')}</h2>
                        <h2>{t('4r')}</h2>
                        <h2>{t('5r')}</h2>
                    </div>
            </section>
        )
    }
