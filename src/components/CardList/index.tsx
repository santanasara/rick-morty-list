import { useEffect, useState } from "react";
import styled from "styled-components";
import { CharacterModel } from "../../models/CharacterModel";
import Card from "../Card";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

export default function CardList({
  charList,
}: {
  charList: Array<CharacterModel>;
}) {
  let history = useHistory();
  return (
    <Container>
      {charList.length > 0 &&
        charList.map((char) => {
          return (
            <Card
              key={char.id}
              name={char.name}
              species={char.species}
              onClick={() => history.push(`/detail/${char.id}`)}
            />
          );
        })}
    </Container>
  );
}
