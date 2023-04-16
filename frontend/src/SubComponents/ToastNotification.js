import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const ToastNotification = ({
  message,
  show,
  setShow,
  closeModal = () => {},
}) => {
  const toastRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        toastRef.current.classList.add("fade-out");
        setTimeout(() => {
          setShow(false);
          closeModal(false);
        }, 300);
      }, 1300);
    }
  }, [show]);

  return (
    <>
      {show && (
        <Toast ref={toastRef}>
          <p>{message}</p>
        </Toast>
      )}
    </>
  );
};

export default ToastNotification;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const Toast = styled.div`
  position: fixed;
  bottom: 16%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out;

  &.fade-out {
    animation: ${fadeOut} 0.3s ease-in-out forwards;
  }
`;
