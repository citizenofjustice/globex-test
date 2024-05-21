import { useEffect, useRef } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
import { useAppContext } from "../hooks/useAppContext";

interface DialogProps {
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ children }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogContentRef = useRef<HTMLDivElement>(null);
  const { isOpen, toggleOpenState } = useAppContext();

  useOutsideClick(dialogContentRef, () => {
    if (!isOpen) return;
    toggleOpenState();
  });

  useEffect(() => {
    if (dialogRef.current?.open && !isOpen) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.open && isOpen) {
      dialogRef.current?.showModal();
    }
  }, [isOpen]);

  return (
    <dialog className="dialog" ref={dialogRef}>
      <div className="dialog_content" ref={dialogContentRef}>
        {children}
      </div>
    </dialog>
  );
};

export default Dialog;
