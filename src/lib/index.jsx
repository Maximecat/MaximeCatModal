import "./index.css"

/**
 * @description react modal by maximecat
 */
function MaximeCatModal({ message, isOpen, onClose }) {
    return (
        <>
            {
                isOpen &&
                <div className="backdrop">
                    <div className="modal-content">
                        <p>{message}</p>
                        <button className="btn-close" onClick={onClose}>x</button>
                    </div>
                </div>
            }
        </>
    )
}

export default MaximeCatModal