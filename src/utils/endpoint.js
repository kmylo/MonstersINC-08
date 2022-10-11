import axios from "axios";

export const apiURL01 = `https://jsonplaceholder.typicode.com/users`;
export const imgURL01 = `https://robohash.org/`;
export const QSTR01 = "set=set1";
export const apiURL02 = `https://pokeapi.co/api/v2/pokemon/`;
export const myAPI01 = axios.create({ baseURL: apiURL01 });
export const myAPI02 = axios.create({ baseURL: apiURL02 });

export const myAPIparams = {
  offset: 12,
  limit: 12
  // _start: 8
};
