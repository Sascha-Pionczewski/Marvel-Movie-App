import styled from "styled-components";

export default function Card({ title, image }) {
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 250px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 375px;
  object-fit: cover;
`;
