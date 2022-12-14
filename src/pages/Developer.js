
import React from "react";
import {useTranslation} from "react-i18next";

function Developer({name, photo, ghref}) {
    const {t} = useTranslation();
    return (
        <div className="col-lg-4">
            <img src={photo}/>
            <h2 className="fw-normal">{t(name)}</h2>
            <p><a href={'https://github.com/' + ghref}>{ghref}</a></p>
        </div>
    );
}
export default Developer;