import patientData from '../data/PatientData.json'

async function getPatientData (patientCode) {
    const patientData = await fetch(`http://localhost:3333/patient/${patientCode}`)
    return await patientData.json()
}

export default getPatientData