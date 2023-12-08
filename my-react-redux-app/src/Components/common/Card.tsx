import styled from "styled-components";

export const Card = ({ width, children }) => {
  return <CardContainer width={width}>{children}</CardContainer>;
};
const CardContainer = styled.div<{ width }>`
    width:100%;
    padding:1.5rem;
    /* border:1px solid #d7d4d2; */
    border-radius:1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;`