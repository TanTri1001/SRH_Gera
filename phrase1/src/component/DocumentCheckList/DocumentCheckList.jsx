import getPatientData from "../../testData/getPatientData.js";
import './DocumentCheckList.css'

function DocumentCheckList({header, doctype}) {


    return (
        <>
            <div className={"document-checklist-container"}>
                <div className={"document-checklist-header-container"}>
                    <h3 className={"document-checklist-header"}>{header}</h3>
                </div>
                    <div className={'document-checklist-list'}>
                        {doctype.map(doc => (
                            <label>{doc.doc}
                            <input key={doc.id} type={"checkbox"}/>
                            </label>
                        ))}
                    </div>
            </div>
        </>
    )
}

export default DocumentCheckList