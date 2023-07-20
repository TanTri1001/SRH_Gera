import './appointmentInfo.css'
import getPatientData from "../../testData/getPatientData.js";
import {useEffect, useState} from "react";

function AppointmentInfo(props) {
    const patientData = getPatientData(0)
    // const [patientData, setPatientData] = useState()



    if (!patientData) {
        return
    }
    return (
        <>
            <li className={'appointment-list-item'}>Date: {patientData.appointment.date}</li>
            <li className={'appointment-list-item'}>Time: {patientData.appointment.time}</li>
            <li className={'appointment-list-item'}>Purpose: {patientData.appointment.purpose}</li>
            <li className={'appointment-list-item'}>Station: {patientData.appointment.location}</li>
        </>

    )

}

export default AppointmentInfo