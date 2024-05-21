import { ContactType } from '../../utils/type';
import { GetContacts } from '../../api/get/Get';

const Contact = ({
  contact,
  seteditedObject,
  setSubmitButton,
  setdeletedObjectId,
  setIsHiddenModal,
}: {
  contact: ContactType;
  seteditedObject: (b: ContactType) => void;
  setSubmitButton: (b: string) => void;
  setdeletedObjectId: (id: number) => void;
  setIsHiddenModal: (b: boolean) => void;
}) => {
  const deleteHandler = (id: number) => {
    setdeletedObjectId(id);
    setIsHiddenModal(true);
  };

  const editHandler = async (id: number) => {
    const res = await GetContacts(id);
    seteditedObject(res.data);
    setSubmitButton('ویرایش');
  };

  return (
    <div className="p-4 shadow bg-slate-200 rounded">
      <div className="flex flex-col gap-1">
        <div>
          <span>نام: </span>
          <span>
            {contact.Fname} {contact.Lname}
          </span>
        </div>
        <div>
          <span>شماره موبایل: </span>
          <span>{contact.phone}</span>
        </div>
        <div>
          <span>نسبت: </span>
          <span>{contact.relative}</span>
        </div>
        <div>
          <span>ایمیل: </span>
          <span>{contact.email}</span>
        </div>
        <div className="flex w-full justify-end">
          <button
            className="text-white bg-blue-500 px-2 py-1 self-center rounded-r"
            onClick={() => editHandler(contact.id)}
          >
            ویرایش
          </button>
          <button
            className="text-white bg-red-500 px-2 py-1 self-center rounded-l"
            onClick={() => deleteHandler(contact.id)}
          >
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
