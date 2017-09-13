const contatcs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          email: action.email,
          phone: action.phone,
        }
      ]
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.id)
    default:
      return state
  }
}

export default contatcs