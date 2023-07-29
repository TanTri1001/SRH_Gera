import './DocumentCheckList.css'
import patchPatientData from "../../testData/patchPatientData.js";

function DocumentCheckList({header, doctype, patientCode}) {

const updatePatientData = event => {
    const document = {id: event.target.id, status: event.target.checked}
    patchPatientData(document, patientCode)

}

    return (
        <>
            <div className={"document-checklist-container"}>
                <div className={"document-checklist-header-container"}>
                    <h3 className={"document-checklist-header"}>{header}</h3>
                </div>
                    <div className={'document-checklist-list'}>
                        {doctype.map(doc => (
                            <label>{doc.name}
                            <input checked={doc.status} key={doc.id} id={doc.id} type={"checkbox"} onChange={updatePatientData}/>
                            </label>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default DocumentCheckList