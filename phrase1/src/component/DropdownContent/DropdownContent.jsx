import './DropdownContent.css'
import {AiFillCaretUp, AiFillCaretDown} from "react-icons/ai"
import {useState} from "react";
import getPatientData from "../../testData/getPatientData.js";
import getTreatmentData from "../../testData/getTreatmentData.js";
function DropdownContent({header, content, type}) {


    const [collapse, setCollapse] = useState(false)
    const [icon, setIcon] = useState(<AiFillCaretUp/>)


    const dropdownVisibilityClass = `dropdown-content ${collapse === false ? 'hidden': ''}`
    const headerRadius = `dropdown-header ${collapse === true ? 'zero-radius': ''}`


    const handleCollapse = event => {
        if (collapse === false) {
            setIcon(<AiFillCaretDown/>)
            setCollapse(true)
        } else {
            setCollapse(false)
            setIcon(<AiFillCaretUp/>)
        }
    }

    let renderContent = "";
    if (type === "text") {
        renderContent = <p>{content}</p>
    } else if (type === "list") {
        renderContent = content.map(item => {
           return <li>{item}</li>
        })
         renderContent = <ul>
            {renderContent}
        </ul>
    }

    return (
        <>
            <div className={'dropdown-container'}>
                <div className={headerRadius}>
                    <p className={'dropdown-header-text'}>{header}</p>
                    <span onClick={handleCollapse}>{icon}</span>
                </div>
                <div className={dropdownVisibilityClass}>
                {renderContent}
            </div>
            </div>

        </>
    )
}
export default DropdownContent