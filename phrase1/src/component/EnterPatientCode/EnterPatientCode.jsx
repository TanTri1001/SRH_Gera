import './EnterPatientCode.css'
import {useState} from "react";
import {useLocation} from "wouter";
import getPatientData from "../../testData/getPatientData.js";


 function EnterPatientCode() {

    const [btnColor, setBtnColor] = useState(false)

     const [message, setMessage] = useState('Please, enter your patient code')
     const [messageBox, setMessageBox] = useState(true)
     const [patientCode, setPatientCode] = useState('')
     const [location, setLocation] = useLocation()

     const btnColorChange = `form-btn ${!btnColor ? 'not-clickable': ''}`
     const errorMessageBox = `form-label ${!messageBox ? 'error-message': ''}`



    const handleSubmit = async (event) => {
        event.preventDefault();

      const response =  await fetch(`http://localhost:3333/patient/${patientCode}`)


        if (!response.ok) {
            setMessage('Your patient code is incorrect')
            setMessageBox(false)
        } else {
            setMessageBox(true)
            setMessage('Please wait for a moment')
            setLocation(`/home/${patientCode}`)
            const patientData = await response.json()
        }
    }

    const handlePatientCode = event => {

        const newPatientCode = event.target.value
        setPatientCode(newPatientCode)
        if (newPatientCode.length >= 4) {
           setBtnColor(true)
        } else if (newPatientCode.length < 4) {
            setBtnColor(false)
        }
    }


    return (
        <>
            <div className={'form-container'}>
            <form onSubmit={handleSubmit}>
                <label className={errorMessageBox} htmlFor={'patient-code'}>{message}</label>
                <div className={'form-input-container'}>
                    <input onChange={handlePatientCode} className={'form-input-field'}  type={"text"} name={'patient-code'} id={'patient-code'} />
                    <a className={'form-input-anchor'} href={'#'}>Forget your patient code?</a>
                </div>
                <button className={btnColorChange} type={"submit"}>Enter</button>
            </form>
            </div>
        </>
    );
 }

 export default EnterPatientCode