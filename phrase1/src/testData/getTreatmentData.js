

async function getTreatmentData (treatmentId) {
    const treatmentData = await fetch(`http://localhost:3333/treatment/${treatmentId}`)
    return await treatmentData.json()
}

export default getTreatmentData