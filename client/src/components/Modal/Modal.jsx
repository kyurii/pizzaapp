
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import './Modal.scss'


const Modal = ({ children }) => {
    const elRef = useRef(document.createElement("div")).current;

    useEffect(() => {
        const modalRoot = document.getElementById("modal");

        if (!modalRoot) {
            return;
        }

        modalRoot.appendChild(elRef);
        return () => {
            modalRoot.removeChild(elRef)
        };
    }, [elRef]);

    return createPortal(<div>{ children }</div>, elRef);
};

export default Modal;
