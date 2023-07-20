import express from 'express';
import { dirname, join } from 'path';
import { Low } from 'lowdb'
import { JSONFile } from 'lowdb/node';


// database setup
const file = "../data/PatientData.json"
const adapter = new JSONFile(file)
const db = new Low(adapter, {})

// Read data from JSON file, this will set db.data content
await db.read()

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('.'));

app.get('/patient/:patientCode', (req, res) => {
    const patientCode = req.params.patientCode;
    console.log(patientCode)
    const patients = db.data;
    const patient = patients.find((patient) => {return patient.patientCode === patientCode});
    if (patient) {
        console.log(patient)
        res.set("Access-Control-Allow-Origin", "*")
        res.json(patient);
    } else {
        res.sendStatus(404)
    }


})

app.post('/patient/:patientCode', (req, res) => {
    const patientCode = req.params.patientCode;
    const patients = db.data;
    const patientIndex = patients.findIndex((patient)=> {return patient.patientCode === patientCode})
    if (patientIndex >= 0) {
        patients[patientIndex] = req.body;
        db.write();
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }

})

app.listen(3333, () => {
    console.log('Server is listening on port 3333');
})