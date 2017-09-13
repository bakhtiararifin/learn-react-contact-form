import { connect } from 'react-redux'
import Contact from './Contact'
import { deleteContact } from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    deleteContact: (name, email, phone) => {
        dispatch(deleteContact(name, email, phone))
    }
  }
}

const ContactContainer = connect(
  null,
  mapDispatchToProps
)(Contact)

export default ContactContainer