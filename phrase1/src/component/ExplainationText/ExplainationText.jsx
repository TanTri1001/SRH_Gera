import './ExplainationText.css'
import getPatientData from "../../testData/getPatientData.js";
import getTreatmentData from "../../testData/getTreatmentData.js";
import  {useEffect, useState} from "react";

function ExplainationText({header, content}) {
    return (
        <>
            <div className={'explaination-text-container'}>
                <h2 className={'explaination-header'}>{header}</h2>
                <div className={'explaination-content'}>
                    <p >{content}</p>
                </div>

            </div>
        </>
    )
}

export default ExplainationText