import './ExplainationText.css'
function ExplainationText({header}) {

    return (
        <>
            <div className={'explaination-text-container'}>
                <h2 className={'explaination-header'}>{header}</h2>
                <div className={'explaination-content'}>
                    <p >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                </div>

            </div>
        </>
    )
}

export default ExplainationText