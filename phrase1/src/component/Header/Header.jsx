import './Header.css'
import logo from '../../assets/Logo/Logo.svg'
import HomeView from "../../views/HomeView/HomeView.jsx";
import {useLocation} from "wouter";

function Header({linkToHome}) {

    return (
        <>
            <div className={'logo-container'} >
                <img src={logo} className={'logo'}/>
                <div className={'name'}>
                    <span>Wald-Klinikum</span>
                    <span>Gera</span>
                </div>
            </div>
        </>
    )
}
export default Header