import { useState } from 'react';
import AddContact from '../components/addContact/AddContact';
import Contacts from '../components/ContactsWrapper/ContactsWrapper';
import Header from '../components/header/Header';
import { ContactType } from '../utils/type';

const Home = () => {
  // const [isUpdate, setIsUpdate] = useState(false);
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [editedObject, seteditedObject] = useState<ContactType | null>(null);
  const [submitButton, setSubmitButton] = useState('اضافه کردن');

  return (
    <div className="mx-3">
      <Header />
      <div className="flex gap-1 mt-2 mx-3 flex-col sm:flex-col sm:gap-3 md:flex-row">
        <AddContact
          setContacts={setContacts}
          editedObject={editedObject}
          submitButton={submitButton}
          setSubmitButton={setSubmitButton}
        />
        <Contacts
          setContacts={setContacts}
          contacts={contacts}
          seteditedObject={seteditedObject}
          setSubmitButton={setSubmitButton}
        />
      </div>
    </div>
  );
};

export default Home;
