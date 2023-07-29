import './ExplainationText.css'

function ExplainationText({header, content}) {
    return (
        <>
            <div className={'explaination-text-container'}>
                <h2 className={'explaination-header'}>{header}</h2>
                <div className={'explaination-content'}>
                    <p >{content}</p>
                </div>

            </div>
        </>
    )
}

export default ExplainationText