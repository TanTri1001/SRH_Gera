import './HomeView.css'
import AppointmentInfo from "../../component/Appointment/appointmentInfo.jsx";
import Button from "../../component/Button/Button.jsx";
import {useLocation} from "wouter";
import Navigation from "../../component/Navigation/Navigation.jsx";


function HomeView(props) {

    const [location, setLocation] = useLocation()

    return (
        <>
            <div className={'homeview-container'}>
                <div className={"appointment-container"}>
                    <h2>Your Appointment</h2>
                    <ul className={'appointment-list'}>
                        <AppointmentInfo patientCode={props.params.patientCode} />
                    </ul>
                </div>
                <div className={'home-btns'}>
                        <Button content={'Preparation'} onClick={()=>setLocation(`/preparation/${props.params.patientCode}`)} />
                        <Button content={'Documents'} onClick={()=>setLocation(`/documents/${props.params.patientCode}`)} />
                </div>
                <div className={"nav"}>
                    <Navigation path={`/home/${props.params.patientCode}`} clickable={false}/>
                </div>

            </div>
        </>
    )
}

export default HomeView