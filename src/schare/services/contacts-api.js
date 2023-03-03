import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://6401c8f83779a862625e002f.mockapi.io/api',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const addContacts = async data => {
  const { data: result } = await contactsInstance.post('/contacts', data);
  return result;
};

export const deleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/contacts/${id}`);
  return data;
};
