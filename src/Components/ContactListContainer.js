import { connect } from 'react-redux'
import ContactList from './ContactList'

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  }
}

const ContactListContainer = connect(
  mapStateToProps
)(ContactList)

export default ContactListContainer