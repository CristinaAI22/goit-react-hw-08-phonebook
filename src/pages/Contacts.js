import { useDispatch, useSelector } from 'react-redux';
import { AddContact } from '../components/AddContact/AddContact';
import { ContactList } from '../components/ContactList/ContactList';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import background from '../images/Daco_4859602.png';
const styles = {
  container: {
    width: '1200px',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    gap: '10px',
  },
  image: {
    backgroundImage: `url(${background})`,
    backgroundSize: '550px',
    backgroundRepeat: 'no-repeat',
    flexBasis: '50%',
  },
  contacts: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    flexBasis: '50%',
  },
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div style={styles.container}>
        <div style={styles.contacts}>
          <AddContact />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </div>
        <div style={styles.image}></div>
      </div>
    </>
  );
}
