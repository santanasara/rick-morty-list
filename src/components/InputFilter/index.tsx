import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30vw;
`;
export default function InputFilter({
  handleChange,
}: {
  handleChange: (name: string) => void;
}) {
  return (
    <Container>
      <input
        type="text"
        onChange={(event) => handleChange(event?.target.value)}
      ></input>
    </Container>
  );
}
