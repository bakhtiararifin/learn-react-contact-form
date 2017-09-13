import { connect } from 'react-redux'
import AddContact from './AddContact'
import { addContact } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    addContact: (name, email, phone) => {
        dispatch(addContact(name, email, phone))
    }
  }
}

const AddContactContainer = connect(
  null,
  mapDispatchToProps
)(AddContact)

export default AddContactContainer