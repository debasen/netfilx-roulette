import './dialog.scss';

const Dialog = (props) => {
    if(!props.isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={()=>props.onClose()}>&times;</span>
                {props.children}
            </div>
        </div>
    )
}

export default Dialog;