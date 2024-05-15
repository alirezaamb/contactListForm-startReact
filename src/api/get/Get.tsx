import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../const';

export const GetContacts = async (id?: number) => {
  if (!id) {
    const response: AxiosResponse = await axios.get(BASE_URL);
    return response;
  } else {
    const response: AxiosResponse = await axios.get(`${BASE_URL}/${id}`);
    console.log(response.data);
    return response;
  }
};
