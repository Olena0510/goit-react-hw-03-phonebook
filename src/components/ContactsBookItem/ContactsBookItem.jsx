import PropTypes from 'prop-types';
import { WrapperItem, Contacts, DeleteBtn } from './ContactsBookItem.styled';

export const ContactsBookItem = ({ name, number, id, deleteContact }) => (
   
    <WrapperItem>
        <Contacts>{name}: {number}</Contacts>
        <DeleteBtn type="button" onClick = {() => deleteContact(id)}>Delete</DeleteBtn>
    </WrapperItem>
)

ContactsBookItem.propTypes = {
  name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired
  
};