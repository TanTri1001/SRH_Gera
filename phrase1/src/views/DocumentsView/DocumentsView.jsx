import './DocumentsView.css'
import ExplainationText from "../../component/ExplainationText/ExplainationText.jsx";
import DocumentCheckList from "../../component/DocumentCheckList/DocumentCheckList.jsx";
import getPatientData from "../../testData/getPatientData.js";
import Navigation from "../../component/Navigation/Navigation.jsx";
import {useEffect, useState} from "react";
import getTreatmentData from "../../testData/getTreatmentData.js";
import postPatientData from "../../testData/postPatientData.js";

function DocumentsView(props) {
    const [patientData, setPatientData] = useState()

    useEffect(() => {
        const fetchData = async() => {
            const patientData = await getPatientData(props.params.patientCode)
            if (Object.keys(patientData.checklist).length === 0) {
                const treatmentData = await getTreatmentData(patientData.appointment.purpose);
                patientData.checklist.required = treatmentData.checklist.required.map((requiredDoc) => {
                    return {...requiredDoc, status: false}
                })
                patientData.checklist.optional = treatmentData.checklist.optional.map((optionalDoc) => {
                    return {...optionalDoc, status: false}
                })
                await postPatientData(patientData)
            }


            setPatientData(patientData);

        }
        fetchData()
    },[]);

    if (!patientData) {
        return
    }
    const content = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."

    const docsRequired = patientData.checklist.required
    const docsOptional = patientData.checklist.optional
    return (
        <>
            <div className={'documentView-container'}>
                <ExplainationText header={'Document Check-list'} content={content}/>
                <DocumentCheckList header={"Required Document"} doctype={docsRequired} patientCode={props.params.patientCode} />
                <DocumentCheckList header={"Optional Document"} doctype={docsOptional} patientCode={props.params.patientCode} />
            </div>
                <Navigation path={`/home/${props.params.patientCode}`} className="nav-Home" clickable={true}/>


        </>
    )
}

export default DocumentsView