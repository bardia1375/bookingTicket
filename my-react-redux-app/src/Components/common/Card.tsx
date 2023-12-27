import styled from "styled-components";

export const Card = ({ width, children, Title }) => {
  return (
    <CardContainer width={width}>
      <div className="title">{Title}</div>
      <div>{children}</div>
    </CardContainer>
  );
};
const CardContainer = styled.div<{ width }>`
  position: relative;
  width: ${({width}) => (width ? width : "100%")};
  padding: 2rem 1.5rem;
  /* border:1px solid #1a1818; */
  border-radius: 1rem;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  .title {
    position: absolute;
    top:8px;
    right:8px;
    font-weight:600
  }
`;
