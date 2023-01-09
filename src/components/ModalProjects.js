import React from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const ModalProjects = ({
  children,
  estado,
  cambiarEstado,
  titulo,
  mostrarOverlay,
  posicionModal,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>{titulo}</h3>
            </EncabezadoModal>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <AiOutlineClose />
            </BotonCerrar>
            {children}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default ModalProjects;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: ${(props) =>
    props.mostrarOverlay ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.25)"};
  padding: 40px;
  display: flex;
  align-items: ${(props) =>
    props.posicionModal ? props.posicionModal : "start"};
  justify-content: center;
  z-index: 100;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  background: #000;
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;
  h3 {
    font-weight: 500;
    font-size: 16px;
    color: red;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  background: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: red;
  align-self: center;
  &:hover {
    background: #670f22;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
