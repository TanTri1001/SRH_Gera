async function patchPatientData(documentData, patientCode) {
    const result = await fetch(`http://localhost:3333/patient/${patientCode}/checklist`, {
        method: "PATCH",
        body: JSON.stringify(documentData),
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

export default patchPatientData