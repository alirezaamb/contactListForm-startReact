import Contact from '../contact/Contact';
import { ContactType } from '../../utils/type';
import { GetContacts } from '../../api/get/Get';
import { useEffect } from 'react';

const ContactsWrapper = ({
  contacts,
  setContacts,
  seteditedObject,
  setSubmitButton,
  setdeletedObjectId,
  setIsHiddenModal,
}: {
  contacts: ContactType[];
  setContacts: (b: ContactType[]) => void;
  seteditedObject: (b: ContactType) => void;
  setSubmitButton: (b: string) => void;
  setdeletedObjectId: (b: number) => void;
  setIsHiddenModal: (b: boolean) => boolean;
}) => {
  useEffect(() => {
    const fetchContacts = async () => {
      const fetchedContacts = await GetContacts();

      setContacts(fetchedContacts.data);
    };
    fetchContacts();
  }, []);

  return (
    <div className="lg:w-1/2 sm:w-full flex flex-col gap-2">
      <h2 className="flex justify-center font-bold text-xl">لیست کاربران</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-2 bg-slate-100 rounded overflow-y-scroll max-h-96">
        {contacts.map((contact, index) => (
          <Contact
            key={index}
            contact={contact}
            // setContacts={setContacts}
            seteditedObject={seteditedObject}
            setSubmitButton={setSubmitButton}
            setdeletedObjectId={setdeletedObjectId}
            setIsHiddenModal={setIsHiddenModal}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactsWrapper;
