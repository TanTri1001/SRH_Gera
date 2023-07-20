import ExplainationText from "../../component/ExplainationText/ExplainationText.jsx";
import './PreparationView.css'
import DropdownContent from "../../component/DropdownContent/DropdownContent.jsx";
import Navigation from "../../component/Navigation/Navigation.jsx";
import {useEffect, useState} from "react";
function PreparationView(props) {
    const [patientData, setPatientData] = useState()

    useEffect(() => {
        const fetchData = async() => {
            const result = await fetch(
                `http://localhost:3333/patient/${props.params.patientCode}`,
            );

            setPatientData(await result.json());
        }
        fetchData()
    },[]);

    if (!patientData) {
        return
    }
    return (
        <>
            <div className={'preparation-view-container'}>
                <ExplainationText header={'Preparation'}/>
                <DropdownContent header={'Dietary'} />
                <DropdownContent header={'Dietary'} />
            </div>

            <Navigation path={`/home/${props.params.patientCode}`} clickable={true}/>


        </>
    )
}

export default PreparationView