import express from 'express';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node';




// database setup
const patientsFile = "../data/PatientData.json"
const treatmentsFile = "../data/treatment.json"
const patientsAdapter = new JSONFile(patientsFile)
const treatmentsAdapter = new JSONFile(treatmentsFile)
const patientsDb = new Low(patientsAdapter, {})
const treatmentsDb = new Low(treatmentsAdapter, {})

// Read data from JSON file, this will set db.data content
// If JSON file doesn't exist, defaultData is used instead
await patientsDb.read()
await treatmentsDb.read()

const app = express();

app.use(express.json());
app.use(express.urlencoded());


app.get('/patient/:patientCode', (req, res) => {
    const patientCode = req.params.patientCode;
    const patients = patientsDb.data;
    const patient = patients.find((patient) => {return patient.patientCode === patientCode});
    if (patient) {
        res.set("Access-Control-Allow-Origin", "*")
        res.json(patient);
    } else {
        res.set("Access-Control-Allow-Origin", "*")
        res.sendStatus(404)
    }
})

app.get('/treatment/:id', (req, res) => {
    const treatmentId = req.params.id;
    const treatments = treatmentsDb.data;
    const treatment = treatments.find((treatment) => {return treatment.id === treatmentId});
    if (treatment) {
        res.set("Access-Control-Allow-Origin", "*")
        res.json(treatment);
    } else {
        res.set("Access-Control-Allow-Origin", "*")
        res.sendStatus(404)
    }
})


app.post('/patient/:patientCode', (req, res) => {
    const patientCode = req.params.patientCode;
    const patients = patientsDb.data;
    const patientIndex = patients.findIndex((patient)=> {return patient.patientCode === patientCode})
    if (patientIndex >= 0) {
        patients[patientIndex] = req.body;
        patientsDb.write();
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }

})

app.listen(3333, () => {
    console.log('Server is listening on port 3333');
})