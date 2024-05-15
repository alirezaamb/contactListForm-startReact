import axios, { AxiosResponse } from 'axios';
import { ContactType } from '../../utils/type';
import { BASE_URL } from '../const';

export const PatchContact = async ({ data }: { data: ContactType }) => {
  try {
    const response: AxiosResponse = await axios.patch(
      `${BASE_URL}/${data.id}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error('Error posting contact:', error);
    throw error;
  }
};
