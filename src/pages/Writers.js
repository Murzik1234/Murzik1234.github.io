import React from 'react';


import writersBackground from '../accerts/bg.jpg';

import { useTranslation } from "react-i18next";

import './css/writersStyles.css'

import Writer_DATA from '../writers.json';

function WriterBlock({name, lifetime, image, link}){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {t} = useTranslation();
    
    var blockWidth;
    window.innerWidth >= 1000 ? blockWidth = 27 : blockWidth = 75; 
    var imgHeight = window.innerWidth * blockWidth / 100 * 350 / 412;

    return (<div
        className = 'writerBlock'
        style = {{
            width: blockWidth + '%', 
        }}
        >
            <div
                className = 'mainImage'
                style={{
                    backgroundImage: 'url(' + image + ')',
                    height: imgHeight + 'px'
                }}>
            </div>
            <h2>{name}</h2>
            <p>{lifetime}</p>
            <a href = {'writer/'+link}>{t('Learn')}</a>
        </div>);
}

export default function Writers(){

    const {t,i18n} = useTranslation();
    const lang = i18n.language
    const l=lang;
    const listOfWriters  = Writer_DATA;
    return (
        <>
            <section style = {{
                backgroundImage: 'url(' + writersBackground + ')',
            }}>
                <h1>{t('Writers')}</h1>
                <div className = 'writersContainer'>
                    {listOfWriters.map((writer, index) => {
                return (
                    <WriterBlock 
                    key = {index}
                    name = {writer[l].title}
                    lifetime={writer.dob} 
                    image= {writer.mainimg}
                    link={writer.writer}/>
                )
            })}
                </div>
            </section>
        </>
    );
}