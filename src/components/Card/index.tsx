import styled from "styled-components";
import { CardModel } from "../../models/CardModel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px;
  padding: 1rem;
  padding-left: 1.5rem;
`;
const Name = styled.h1``;
const Species = styled.p``;
export default function Card({ name, species, onClick }: CardModel) {
  return (
    <Container onClick={onClick}>
      <Name>{name}</Name>
      <Species>{species}</Species>
    </Container>
  );
}
