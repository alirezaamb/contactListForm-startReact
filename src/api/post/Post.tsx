import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from '../const';
import { ContactType } from '../../utils/type';

export const PostContact = async ({ data }: { data: ContactType }) => {
  try {
    const response: AxiosResponse = await axios.post(BASE_URL, data);
    console.log('PostContact response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error posting contact:', error);
    throw error;
  }
};
