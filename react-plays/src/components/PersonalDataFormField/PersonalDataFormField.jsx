import './Login.css'
import {useState} from "react";
import PropTypes from "prop-types";

const initialPersonalData = {
    firstName: '',
    lastName: ''
}

function PersonalDataFormFields({onChange}) {

    const [personalData, setPersonalData] = useState(initialPersonalData);
    const [showError, setShowError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const onFirstNameChange = event => {
        const firstName = event.target.value;
        const newPersonalData = {...personalData, firstName};
        setPersonalData(newPersonalData);

        setShowError(firstName=='')

        onChange(newPersonalData)
    }

    const onLastNameChange = event => {
        const lastName = event.target.value;
        const newPersonalData = {...personalData, lastName}
        setPersonalData(newPersonalData);

        setShowError(lastName == '')

        onChange(newPersonalData)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor={'firstName'}>Firstname</label>
                    <input name={'firstName'} onChange={onFirstNameChange} type={'text'}/>
                </fieldset>
                <fieldset>
                    <label htmlFor={'lastName'}>Lastname</label>
                    <input name={'lastName'} type={'lastName'} onChange={onLastNameChange}/>
                </fieldset>
                {showError && <p style={{color:"red"}}>No field must be empty.</p>}
            </form>
        </>

    );

}

PersonalDataFormFields.propTypes = {
    onChange: PropTypes.func.isRequired
}

export default PersonalDataFormFields;