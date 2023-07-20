import './Login.css'
import {useState} from "react";


function Login() {

    const [userName, setUserName] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const onUserNameChange = event => {
        const {value } = event.target;
        setUserName(value);

        setShowError(value == '')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor={'userName'}>User name</label>
                    <input name={'userName'} onChange={onUserNameChange} type={'text'}/>
                    {showError && <p style={{color:"red"}}>Check your username !</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor={'password'}>Password</label>
                    <input name={'password'} type={'password'}/>
                </fieldset>
                <button type={'submit'}>Login</button>
            </form>
            <h1>{userName}</h1>
        </>

    );

}

Login.propTypes = {}

export default Login;