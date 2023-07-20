import './DocumentsView.css'
import ExplainationText from "../../component/ExplainationText/ExplainationText.jsx";
import DocumentCheckList from "../../component/DocumentCheckList/DocumentCheckList.jsx";
import getPatientData from "../../testData/getPatientData.js";
import Navigation from "../../component/Navigation/Navigation.jsx";
import {useEffect, useState} from "react";

function DocumentsView(props) {
    const [patientData, setPatientData] = useState()

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(
                `http://localhost:3333/patient/${props.params.patientCode}`,
            );

            setPatientData(await result.json());
        }
        fetchData()
    },[]);

    if (!patientData) {
        return
    }

    const docsRequired = patientData.documents.required
    const docsOptional = patientData.documents.optional
    return (
        <>
            <div className={'documentView-container'}>
                <ExplainationText header={'Document Check-list'}/>
                <DocumentCheckList header={"Required Document"} doctype={docsRequired} />
                <DocumentCheckList header={"Optional Document"} doctype={docsOptional} />
            </div>
                <Navigation path={`/home/${props.params.patientCode}`} className="nav-Home" clickable={true}/>


        </>
    )
}

export default DocumentsView