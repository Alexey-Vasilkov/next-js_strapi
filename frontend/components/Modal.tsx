import { useState, useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import { FaTimes } from "react-icons/fa";
import styles from "@/styles/Modal.module.css";

interface IModalProps {
  show: boolean;
  children: ReactNode;
  title?: string;
}

export default function Modal({ show, children, title }: IModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);
  const [showModal, setShowModal] = useState(show);

  useEffect(() => setIsBrowser(true), []);

  const handleClick = () => setShowModal((prev) => !prev);

  const modalContent = showModal ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleClick}>
            <FaTimes />
          </a>
        </div>
        {title && <div>{title}</div>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

  return isBrowser
    ? ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")!
      )
    : null;
}
