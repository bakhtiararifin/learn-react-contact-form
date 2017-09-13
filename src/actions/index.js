import uuid from 'uuid';

export const addContact = (name, email, phone) => {
  return {
    type: 'ADD_CONTACT',
    id: uuid.v4(),
    name,
    email,
    phone
  }
}

export const deleteContact = id => {
  return {
    type: 'DELETE_CONTACT',
    id
  }
}
