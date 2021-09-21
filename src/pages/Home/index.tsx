import { useEffect, useState } from "react";
import styled from "styled-components";
import CardList from "../../components/CardList";
import InputFilter from "../../components/InputFilter";
import { CharacterModel } from "../../models/CharacterModel";
import { getChars } from "./services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

export default function Home() {
  const [charList, setCharList] = useState<Array<CharacterModel>>([]);
  const [filterName, setFilterName] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const charListMock: Array<CharacterModel> = [
    { id: 0, name: "Rick", species: "human" },
    { id: 1, name: "Morty", species: "human" },
  ];

  useEffect(() => {
    getChars(page, filterName).then((response) => {
      if (response.res) {
        setCharList((oldState) => [...oldState, ...response.data.results]);
      }
    });
  }, [filterName, page]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };
  document.addEventListener("scroll", handleScroll);
  return (
    <Container>
      <InputFilter handleChange={setFilterName} />
      <CardList charList={charList} />
    </Container>
  );
}
