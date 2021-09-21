import axios from "axios";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api/character",
});

export const getChars = async (page: number, name: string) => {
  try {
    const response = await api.get(`?name=${name}`);

    return { res: true, data: response.data };
  } catch (err) {
    return { res: false, message: "Falha ao recuperar personagens" };
  }
};
