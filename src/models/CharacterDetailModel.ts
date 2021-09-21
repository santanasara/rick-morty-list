export interface CharDetailModel {
  name: string;
  species: string;
  gender: string;
  type: string;
  origin: { name: string };
  location: { name: string };
  image: string;
  episode: Array<string>;
}
