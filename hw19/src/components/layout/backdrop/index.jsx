import { createPortal } from "react-dom";
import styled from "styled-components";

const Layer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0006;
  backdrop-filter: blur(10px);
`;

export const Backdrop = ({ children, onClick }) => {
  const jsx = (
    <Layer onClick={onClick}>
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </Layer>
  );

  return createPortal(jsx, document.getElementById("overlay"));
};
