//import { useState } from "react";
import ReactModal from "react-modal";
import Modal from "react-modal";
import css from "./ImageModal.module.css";
export default function ImageModal({ isOpen, onClose, children }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        overlayClassName={css.reactModaloverlay}
        className={css.reactModalcontent}
        onRequestClose={onClose}
        ariaHideApp={false}
      >
        <button className={css.btnMore} onClick={onClose}>
          close
        </button>
        {children}
      </Modal>
    </>
  );
}