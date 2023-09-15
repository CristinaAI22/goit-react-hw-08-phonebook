import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const contactName = contact.name;
  const contactNumber = contact.number;
  const handleRemove = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={css.item}>
      <span>
        {contactName} - {contactNumber}
      </span>
      <button className={css.deleteBtn} onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
};
