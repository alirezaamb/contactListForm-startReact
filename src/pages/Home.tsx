import { useState } from 'react';
import AddContact from '../components/addContact/AddContact';
import ContactsWrapper from '../components/ContactsWrapper/ContactsWrapper';
import Header from '../components/header/Header';
import { ContactType } from '../utils/type';
import Modal from '../components/modal/Modal';

const Home = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [editedObject, seteditedObject] = useState<ContactType | null>(null);
  const [submitButton, setSubmitButton] = useState('اضافه کردن');
  const [deletedObjectId, setdeletedObjectId] = useState<number | null>(null);
  const [isHiddenModal, setIsHiddenModal] = useState(false);

  return (
    <div className="mx-3 max-w-[1536px] 2xl:mx-auto">
      <Header />
      <div className="flex gap-1 mt-2 mx-3 flex-col sm:flex-col sm:gap-3 md:flex-row">
        <AddContact
          setContacts={setContacts}
          editedObject={editedObject}
          submitButton={submitButton}
          setSubmitButton={setSubmitButton}
        />
        <ContactsWrapper
          setContacts={setContacts}
          contacts={contacts}
          seteditedObject={seteditedObject}
          setSubmitButton={setSubmitButton}
          setdeletedObjectId={setdeletedObjectId}
          setIsHiddenModal={setIsHiddenModal}
        />
        {isHiddenModal && deletedObjectId !== null && (
          <Modal
            deletedObjectId={deletedObjectId}
            setContacts={setContacts}
            setIsHiddenModal={setIsHiddenModal}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
