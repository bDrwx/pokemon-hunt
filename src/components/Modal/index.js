import { useRef, useEffect } from "react";
import cn from "classnames";
import s from "./style.module.css";

const Modal = ({ title, isOpen, onClose, children }) => {

    const modalRef = useRef(null);

    const handleCloseOutsideClick = (e) => {
        if (!modalRef.current.contains(e.target)) {
            onClose && onClose();
        }
    }

    const handleCloseBtn = (e) => {
        onClose && onClose();
    }

    useEffect(() => {
        document.querySelector("body").style.overflow = isOpen ? "hidden" : null;

    }, [isOpen]);

    return (
        <div className={cn(s.root, { [s.open]: isOpen })} onClick={handleCloseOutsideClick}>
            <div className={s.modal} ref={modalRef}>
                <div className={s.head}>
                    {title}
                    <span className={s.btnClose} onClick={handleCloseBtn}></span>
                </div>
                <div className={s.content}>
                    {children}
                </div>
            </div>
        </div >
    );
}

export default Modal;