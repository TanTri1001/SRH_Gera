import './appointmentInfo.css'
import getPatientData from "../../testData/getPatientData.js";
import getTreatmentData from "../../testData/getTreatmentData.js";
import {useEffect, useState} from "react";

function AppointmentInfo({patientCode}) {
    const [patientData, setPatientData] = useState()
    const [treatmentData, setTreatmentData] = useState()

    useEffect(() => {
        const fetchData = async() => {
            const patientsData = await getPatientData(patientCode)
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
            <li className={'appointment-list-item'}>Date: {patientData.appointment.date}</li>
            <li className={'appointment-list-item'}>Time: {patientData.appointment.time}</li>
            <li className={'appointment-list-item'}>Purpose: {treatmentData.title}</li>
            <li className={'appointment-list-item'}>Station: {patientData.appointment.location}</li>
        </>

    )

}

export default AppointmentInfo