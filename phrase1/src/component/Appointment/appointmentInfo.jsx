import './appointmentInfo.css'
import getPatientData from "../../testData/getPatientData.js";

function AppointmentInfo() {
    const patientData = getPatientData(0)

    return (
        <>
            <li className={'appointment-list-item'}>Date: {patientData.appointment.date}</li>
            <li className={'appointment-list-item'}>Time: {patientData.appointment.time}</li>
            <li className={'appointment-list-item'}>Date: {patientData.appointment.purpose}</li>
            <li className={'appointment-list-item'}>Date: {patientData.appointment.location}</li>
        </>

    )

}

export default AppointmentInfo