export default function Modal({children, onClose}) {

    return(
        <div className="Overlay" onClick = {onClose}>
            <div className="Modal"></div>
        </div>
    )
}