import Hello from "./components/Hello/Hello.jsx";
import './App.css'
import EnterPatientNum from "./components/PatientNumber/PatientNumber.jsx";
import "./font/SRHHeadline_A_Bd.ttf"
import Login from "./components/Login/Login.jsx";
import Collapsible from "./components/Collapsible/Collapsible.jsx";
import {useState} from "react";
import VectorLogo from "../public/Vector.svg";
import SRH_Logo from "../public/SRH_Logo.svg"
import {Link} from 'wouter'

function App() {
    // const [visible, setVisible] = useState(true)
    //
    // const handleVisibilityChange = () => {
    //     setVisible(!visible);
    // }
    //
    // return (
    //     <>
    //         {
    //             items.map(item => (
    //                 <Collapsible title={item.title} key={item.id}>
    //                     {item.content}j
    //                 </Collapsible>
    //             ))
    //         }
    //         {visible && <Hello color={'blue'}>Marie</Hello>}
    //         <input type={'checkbox'} checked={visible} onChange={handleVisibilityChange}/> Toggle
    //     </>
    // )

    /* return
                <header className={'navigation'}>
                <a className={'navigation-item'} onClick={()=> setViewName('home')}>Home</a>
                <a className={'navigation-item'} onClick={()=> setViewName('profile')}>Profile</a>
            </header>
            {viewName == 'home' && <MainView/>}
            {viewName == 'profile' && <ProfileView/>}
*/

    //     <header className={'navigation'}>
    //     <Link href={"/"}>
    //         <a className={'navigation-item'}>Home</a>
    //     </Link>
    //     <Link href={"/profile"}>
    //         <a className={'navigation-item'}>Profile</a>
    //     </Link>
    // </header>
    // <Route path="/" component={MainView}/>
    // <Route path="/profile" component={ProfileView}/>

    return (
        <>
            <header>
                <img className={'pipe'} src={VectorLogo} />
                <div className={'logo-header'}>
                    <img className={'logo'} src={SRH_Logo}/>
                    <p className={'logo-name'}>Wald-Klinikum<br/>
                        Gera</p>
                </div>

            </header>

           <EnterPatientNum/>
        </>
    )
}

export default App
