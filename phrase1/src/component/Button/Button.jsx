import './Button.css'

function Button({content, onClick}) {


    return (
        <>
            <div >
             <button className={'default-btn'} type={"button"} onClick={onClick}>{content}</button>
            </div>
        </>
    )
}
export default Button