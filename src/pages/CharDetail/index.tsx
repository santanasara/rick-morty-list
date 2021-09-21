import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CardList from "../../components/CardList";
import InputFilter from "../../components/InputFilter";
import { CharDetailModel } from "../../models/CharacterDetailModel";
import { CharacterModel } from "../../models/CharacterModel";
import { getChars } from "./services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: flex-start;
  align-items: center;
`;

const Name = styled.h1``;
const CharAttribute = styled.p``;

export default function CharDetail() {
  const [charProps, setCharProps] = useState<CharDetailModel>();
  let { id } = useParams<{ id: string }>();

  const handleEpisodes = () => {
    if (charProps) {
      const episodesList = charProps.episode.map((episode) => {
        const episodeSplit = episode.split("/");
        return episodeSplit[episodeSplit.length - 1];
      });
      console.log(episodesList.join(","));
      return episodesList.join(",");
    }
  };
  useEffect(() => {
    getChars(id).then((response) => {
      if (response.res) {
        setCharProps(response.data);
      }
    });
  }, []);

  return (
    <Container>
      <img src={charProps?.image} alt="charImage" />
      <Name>{charProps?.name}</Name>
      <CharAttribute>{charProps?.gender}</CharAttribute>
      <CharAttribute>{charProps?.species}</CharAttribute>
      <CharAttribute>{charProps?.type}</CharAttribute>
      <CharAttribute>{charProps?.origin.name}</CharAttribute>
      <CharAttribute>{charProps?.location.name}</CharAttribute>

      <h1>Episodes</h1>
    </Container>
  );
}
