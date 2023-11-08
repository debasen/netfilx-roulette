import './dialog.scss';

const Dialog = (props) => {
    if (!props.isOpen) return null;
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close" onClick={() => props.onClose()}>&times;</span>
                </div>
                <div className="modal-body">
                <div className="modal-title">{props.title}</div>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Dialog;