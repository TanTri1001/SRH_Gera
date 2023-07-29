async function postPatientData(patientData) {
    const result = await fetch(`http://localhost:3333/patient/${patientData.patientCode}`, {
        method: "POST",
        body: JSON.stringify(patientData),
        headers: {
            'Content-Type': 'application/json',
            'Accept': '*/*',
        }
    })

    if (result.statusCode === 200) {
        return true
    }

    return false
}

export default postPatientData