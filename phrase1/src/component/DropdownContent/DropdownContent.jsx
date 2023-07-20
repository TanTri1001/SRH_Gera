import './DropdownContent.css'
import {AiFillCaretUp, AiFillCaretDown} from "react-icons/ai"
import {useState} from "react";
function DropdownContent({header}) {
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

    return (
        <>
            <div className={'dropdown-container'}>
                <div className={headerRadius}>
                    <p className={'dropdown-header-text'}>{header}</p>
                    <span onClick={handleCollapse}>{icon}</span>
                </div>
                <div className={dropdownVisibilityClass}>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
            </div>
            </div>

        </>
    )
}
export default DropdownContent