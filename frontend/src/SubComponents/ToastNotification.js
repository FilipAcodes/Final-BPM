import React, { useEffect } from "react";
import styled from "styled-components";

const ToastNotification = ({
  message,
  show,
  setShow,
  closeModal = () => {},
}) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(false);
        closeModal(false);
      }, 1300);
    }
  }, [show]);

  return (
    <>
      {show && (
        <Toast show={show}>
          <p>{message}</p>
        </Toast>
      )}
    </>
  );
};

export default ToastNotification;

const Toast = styled.div`
  position: fixed;
  bottom: 16%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
