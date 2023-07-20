import './PatientNumber.css'
import {useState} from "react";
import VectorLogo from "/public/Vector.svg"
import { FaChevronRight, FaExclamation } from "react-icons/fa";
import SrhNurse from "/public/SRH_Nurse.svg"


function EnterPatientNum() {
    const [patientNum, setPatientNum] = useState('');
    const [showError, setShowError] = useState(false);
    const [btnColor, setBtnColor] = useState(false)

    const validatePatientNum = () => {
        return patientNum !== "1234"
    }

    const handleSubmit = event => {
        event.preventDefault();
        setShowError(validatePatientNum);

    }
    const btnColorChange = `form-btn ${btnColor ? 'changed': null}`


    const handlePatientNum = (event) => {
        const newPatientNum = event.target.value
        setPatientNum(newPatientNum);

        if (newPatientNum.length == 4) {
            setBtnColor(true)
        } else {
            setBtnColor(false)
        }
    }

    return (
        <>

                <div className={'content'}>
                    <form className={'form'}  onSubmit={handleSubmit}>
                        <fieldset className={'questions-block'}>
                                <img src={SrhNurse} className={'avatar'} />
                                <div className={'form-label-container'}><label className={'form-label'} htmlFor="patientNum">Bitte geben Sie Ihre <span className={'font-orange'}> Patientennummer </span> ein .</label></div>
                                <div className={'form-input'}>
                                    <input className={'form-input-field'} onChange={handlePatientNum} name="patientNum" type="text"/>
                                    {showError && <span className={'error-message'}> <FaExclamation/></span>}
                                </div>
                        </fieldset>
                        <button className={btnColorChange} type={"submit"}><span className={'btn-clickable'}><FaChevronRight/></span></button>
                    </form>
                </div>

        </>
    )
}

export default EnterPatientNum;