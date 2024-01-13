import "./index.css"

/**
 * @description react modal by maximecat
 * @param message string to display the message in the modal
 * @param isOpen boolean that changes from true to false
 * @param onClose for closure of the modal
 *
 * @return void
 * @author Maxime
 * @version 1.0
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