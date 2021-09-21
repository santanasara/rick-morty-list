import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export const getChars = async (id: string) => {
  try {
    const response = await api.get(id);

    return { res: true, data: response.data };
  } catch (err) {
    return { res: false, message: "Falha ao recuperar personagens" };
  }
};
