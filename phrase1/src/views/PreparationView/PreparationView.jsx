import ExplainationText from "../../component/ExplainationText/ExplainationText.jsx";
import './PreparationView.css'
import DropdownContent from "../../component/DropdownContent/DropdownContent.jsx";
import Navigation from "../../component/Navigation/Navigation.jsx";
import {useEffect, useState} from "react";
import getTreatmentData from "../../testData/getTreatmentData.js";
import getPatientData from "../../testData/getPatientData.js";
function PreparationView(props) {
    const [patientData, setPatientData] = useState()
    const [treatmentData, setTreatmentData] = useState()

    useEffect(() => {
        const fetchData = async() => {
            const patientsData = await getPatientData(props.params.patientCode)
            const treatmentsData = await getTreatmentData(patientsData.appointment.purpose)

            setPatientData(patientsData);
            setTreatmentData(treatmentsData)
        }
        fetchData()
    },[]);


    if (!patientData || !treatmentData) {
        return
    }

    return (
        <>
            <div className={'preparation-view-container'}>
                <ExplainationText header={'Preparation'} content={treatmentData.description}/>
                {treatmentData.preparation.map((data) => {
                    return <DropdownContent header={data.title} content={data.content} type={data.type}></DropdownContent>
                })}
            </div>

            <Navigation path={`/home/${props.params.patientCode}`} clickable={true}/>


        </>
    )
}

export default PreparationView